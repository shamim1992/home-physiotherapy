import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePhoto:{
        type: String,
    },
    address:{
        type: String,
    },
    age:{
        type: Number,
    },
    gender:{
        type: String,
    },
    registrationNumber:{
        type: String,
    },
    prescription:{
        type: String
    },
    services:[{type: Schema.Types.ObjectId, ref: 'services'}],
    isAdmin:{
        type: Boolean,
        default: false
    },
    
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;