import LoginServices from '../services/login.service.js';

const loginServices = new LoginServices();

class LoginControllers {
  async Login(request, response) {
    const { email, senha } = request.body;

    const login = await loginServices.Login({ email, senha });

    if (login.status === 400) {
      return response.status(login.status).send(login.message);
    }

    response.status(login.status).send({ token: login.token });
  }
}

export default LoginControllers;
