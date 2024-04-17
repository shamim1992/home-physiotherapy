import express from 'express';
import { booking, getAllBookings, getBookings } from '../controllers/bookingController.js';
const router = express.Router();

router.post('/appointment', booking);
router.get('/:id', getBookings);
router.get('/',getAllBookings)

export default router;