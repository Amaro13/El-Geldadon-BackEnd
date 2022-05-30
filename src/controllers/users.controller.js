import UsersServices from '../services/users.service.js';

const usersServices = new UsersServices();

class UsersControllers {
  async listAll(request, response) {
    const users = await usersServices.listAll();

    response.send(usuarios);
  }

  async listbyId(request, response) {
    const id = request.params.id;

    const user = await usersServices.listbyId({ id });

    response.send(user);
  }

  async createnewUser(request, response) {
    const { email, name, password, adm } = request.body;

    try {
      const user = await usersServices.createnewUser({
        email,
        name,
        password,
        adm,
      });

      response.status(201).send(user);
    } catch (error) {
      if (error.code === 11000) {
        response.status(400).send('Email already registered');
      }
    }
  }

  async updateUser(request, response) {
    const id = request.params.id;
    const { email, name, password, adm } = request.body;

    try {
      const userUpdated = await usersServices.updateUser({
        id,
        email,
        name,
        password,
        adm,
      });

      response.send(userUpdated);
    } catch (error) {
      if (error.code === 11000) {
        response.status(400).send('Email already registered');
      }
    }
  }

  async deleteUser(request, response) {
    const id = request.params.id;

    await usersServices.deleteUser({ id });

    response.sendStatus(204);
  }
}

export default UsersControllers;
