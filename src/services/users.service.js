import User from '../models/users.js';
import bcryptjs from 'bcryptjs';

class UsersServices {
  async listAll() {
    const users = await User.find();

    return users;
  }

  async listbyID({ id }) {
    const user = await User.findById(id);

    return user;
  }

  async createnewUser({ email, name, password, adm }) {
    const encryptedPassword = await bcryptjs.hash(password, 8);

    const newUser = {
      email,
      name,
      password: encryptedPassword,
      adm,
    };

    try {
      const user = await User.create(newUser);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser({ id, email, name, password, adm }) {
    const userUpdated = {
      email,
      name,
      password,
      adm,
    };

    try {
      await User.updateOne({ _id: id }, userUpdated);

      const user = await User.findById(id);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser({ id }) {
    await User.findByIdAndDelete(id);
  }
}

export default UsersServices;
