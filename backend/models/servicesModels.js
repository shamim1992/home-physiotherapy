import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    username: {
        type: String, 
    },
    price: {
        type: Number,
    },
    description: {
        type: String, 
    },
    image: {
        type: String,
    },
 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    }
},{timestamps: true})

const Service = mongoose.model('Service', ServiceSchema);

export default Service;