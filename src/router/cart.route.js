import express from 'express';
import * as controllerCart from '../controllers/cart.controller.js';
import { validObjectBodyCart } from '../middlewares/cart.middleware.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger.js';

const cartroutes = express.Router();

cartroutes.get('/all-cart', controllerCart.findAllCartController);
cartroutes.post(
  '/create-cart',
  validObjectBodyCart,
  controllerCart.createItemsCartController,
);
cartroutes.delete('/finish-cart', controllerCart.deleteItemsCartController);

export default cartroutes;
