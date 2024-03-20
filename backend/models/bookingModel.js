import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    patientState:{
        type: String,
    },
    city:{
        type: String,
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    
    prescription: {
        type: String,
    },
    status: {
        type: String,
        required: true
    }
},{timestamps: true})

const Booking = mongoose.model("Appointment", bookingSchema);

export default Booking;