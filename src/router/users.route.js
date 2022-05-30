import { Router } from 'express';
import UsersControllers from '../controllers/users.controller.js';
import {
  verifyUserInfoMiddleware,
  verifyUserIdMiddleware,
} from '../middlewares/users.middleware.js';
import verifyTokenMiddleware from '../middlewares/token.middleware.js';

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get('', usersControllers.listAll);
usersRouter.get('/:id', verifyUserIdMiddleware, usersControllers.listbyId);
usersRouter.post(
  '/create-user',
  verifyUserInfoMiddleware,
  usersControllers.createnewUser,
);
usersRouter.put(
  '/update-user/:id',
  verifyTokenMiddleware,
  verifyUserIdMiddleware,
  verifyUserInfoMiddleware,
  usersControllers.updateUser,
);
usersRouter.delete(
  '/delete-user/:id',
  verifyTokenMiddleware,
  verifyUserIdMiddleware,
  usersControllers.deleteUser,
);

export default usersRouter;
