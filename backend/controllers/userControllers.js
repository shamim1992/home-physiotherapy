import User from "../models/usermodels.js";
import { errorHandler } from "../utils/error.js";
export const allusers = async (req, res) => {

    try {
    const allusers =await User.find()
    res.status(200).json(allusers)
} catch (error) {
    res.status(error.status).json(error.message);
}
}

export const singleUser = async (req, res) => {
    try {
        const singleUser = await User.findById(req.params.id)
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(error.status).json(error.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(error.status).json(error.message);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteUser)
        
    } catch (error) {
        next(errorHandler(error));
    }
}