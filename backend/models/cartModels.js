import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const CartItem = mongoose.model('CartItem', CartItemSchema);

export default CartItem;
