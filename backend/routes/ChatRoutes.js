import express from 'express';
import { chatHandler } from '../controllers/chatControllers.js';
const router = express.Router();

router.post('/msg', chatHandler);

export default router;