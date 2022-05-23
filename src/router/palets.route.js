import express from 'express';
import * as controllerPalets from '../controllers/palets.controller.js';
// const controllerPalets = require('../controllers/palets.controller.js');

export const routes = express.Router();

routes.get('/all-palets', controllerPalets.findPaletsController);
routes.get('/palet/:id', controllerPalets.findPaletByIdController);
routes.post('/create', controllerPalets.createPaletController);
routes.put('/update/:id', controllerPalets.updatePaletController);
routes.delete('/delete/:id', controllerPalets.deletePaletController);
