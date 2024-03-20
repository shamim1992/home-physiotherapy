import Booking from '../models/bookingModel.js'

export const booking = async (req, res, next) =>{
    const {username, patientState, address, city, date, time, doctor, prescription, status} = req.body;
    try {
        if(!username || !patientState || !city || !date || !time || !doctor || !status){
            next(errorHandler(400, 'Enter all required fields'));
        } 
        const newBooking = new Booking({
            username,
            patientState,
            city,
            date,
            time,
            address,
            doctor,
            prescription,
            status
        });
        const bookingdata = await newBooking.save();
        res.status(200).json(bookingdata)
    } catch (error) {
        next(errorHandler(500, {error: error.message}));
    }
}