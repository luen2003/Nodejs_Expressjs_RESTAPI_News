import express from 'express';

import { getUsers, createUser, getUser, deleteUser,deleteUsers, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.delete('/', deleteUsers);

router.patch('/:id', updateUser);

export default router;