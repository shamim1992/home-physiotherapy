import express from 'express';
import { allusers, deleteUser, singleUser, updateUser } from '../controllers/userControllers.js';
const router = express.Router();

router.get('/', allusers);
router.get('/:id', singleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;