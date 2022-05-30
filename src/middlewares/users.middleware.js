import User from '../models/users.js';
import mongoose from 'mongoose';

export const verifyUserIdMiddleware = async (request, response, next) => {
  const id = request.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: 'Invalid ID!' });
  }

  const user = await User.findById(id);

  if (!user) {
    return response.status(404).send('User not found!');
  }

  next();
};

export const verifyUserInfoMiddleware = (request, response, next) => {
  const { email, name, password } = request.body;

  if (!email || !name || !password) {
    return response.status(422).send('Dados incompletos');
  }

  next();
};
