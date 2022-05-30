import jwt from 'jsonwebtoken';

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    return res.status(401).send('Token not sent');
  }

  jwt.verify(token, 'secret_key', (error, decoded) => {
    if (error) {
      return res.status(401).send('Invalid Token');
    }

    next();
  });
};

export default verifyTokenMiddleware;
