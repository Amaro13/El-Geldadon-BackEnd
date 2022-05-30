import { Router } from 'express';
import LoginControllers from '../controllers/login.controller.js';

const loginRouter = Router();
const loginControllers = new LoginControllers();

loginRouter.post('', loginControllers.Login);

export default loginRouter;
