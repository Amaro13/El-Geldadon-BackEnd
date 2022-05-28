import express from 'express';
import * as controllerPalets from '../controllers/palets.controller.js';
// const controllerPalets = require('../controllers/palets.controller.js');
import * as controllerCart from '../controllers/cart.controller.js';
import {
  validId,
  validObjectBody,
  validObjectBodyCart,
} from '../middlewares/palet.middleware.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger.js';

export const routes = express.Router();

// routes.get('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.get('/all-palets', controllerPalets.findPaletsController);
routes.get('/palet/:id', validId, controllerPalets.findPaletByIdController);
routes.post('/create', validObjectBody, controllerPalets.createPaletController);
routes.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerPalets.updatePaletController,
);
routes.delete('/delete/:id', validId, controllerPalets.deletePaletController);

routes.get('/all-cart', controllerCart.findAllCartController);

routes.post(
  '/create-cart',
  validObjectBodyCart,
  controllerCart.createItemsCartController,
);
routes.delete('/finish-cart', controllerCart.deleteItemsCartController);
