// Importação do model para acessar os usuarios
import usersRouter from '../models/users.js';
// Importação das bibliotecas de segurança
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

class LoginServices {
  // Função de login, assincrona por chama metodo da model do mongoose
  // Recebe email e senha para tentar fazer o login
  async Login({ email, password }) {
    // Buscar o usuário por email
    const user = await usersRouter.findOne({ email: email });

    // Verificação do email e retorno de resposta caso ele não seja encontrado
    if (!user) {
      return { status: 400, message: 'Email incorreto' };
    }

    // Comparação da senha criptografada com a senha normal
    const validPassword = await bcryptjs.compare(password, usuario.password);

    // Verificação da senha e retorno da resposta caso ela não seja válida
    if (validPassword === false) {
      return { status: 400, message: 'Incorrect password' };
    }

    const token = jwt.sign({ email: email }, 'secret_key', {
      expiresIn: '24h',
    });

    return { status: 200, token: token };
  }
}

export default LoginServices;
