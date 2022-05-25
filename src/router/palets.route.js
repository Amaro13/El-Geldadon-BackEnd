import express from 'express';
import * as controllerPalets from '../controllers/palets.controller.js';
// const controllerPalets = require('../controllers/palets.controller.js');
import { validId, validObjectBody } from '../middlewares/palet.middleware.js';

export const routes = express.Router();

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
