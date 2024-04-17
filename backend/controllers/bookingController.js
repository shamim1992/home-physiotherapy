import Booking from '../models/bookingModel.js'
import Services from '../models/servicesModels.js'

export const booking = async (req, res) => {
    try {
      const { userData, service, formData } = req.body;

      // Create a new booking with the provided data
      const newBooking = new Booking({
        username: userData.username,
        fullName: userData.fullName,
        patientId: userData.patientId,
        address: formData.address,
        contact: formData.contact,
        date: formData.date,
        email: formData.email,
        service,
      });
      const savedBooking = await newBooking.save();
  
      res.status(201).json(savedBooking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating booking' });
    }
  };

//   get single booking
  export const getBookings = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
        .populate('service');
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }

      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving bookings' });
    }
  }
//   get all booking
  export const getAllBookings = async (req, res) => {
    try {
        const { patientId } = req.query;
    const bookings = await Booking.find({ patientId })
      .populate('service');

    if (bookings.length === 0) {
      return res.status(200).json({ message: 'No bookings to show now' });
    }

    res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving bookings' });
    }
  }