import { Router } from 'express';
import usersControllers from '../controllers/users.controllers.js';

const router = Router();

router.get('/', usersControllers.getUsers)

router.post('/', usersControllers.createUser)

router.post('/:uid/courses/:cid', usersControllers.registerUserToCourse)


export default router;