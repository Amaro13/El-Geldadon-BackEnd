import express from 'express';
import cors from 'cors';
import paletroutes from './src/router/palets.route.js';
import cartroutes from './src/router/cart.route.js';
import usersRouter from './src/router/users.route.js';
import loginRouter from './src/router/login.route.js';
import { connectToDatabase } from './src/database/database.js';
import 'dotenv/config';

const port = process.env.PORT || 3001;
const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/palets', paletroutes);
app.use('/cart', cartroutes);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
