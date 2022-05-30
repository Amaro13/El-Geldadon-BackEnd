import { Router } from 'express';
import controllerPalets from '../controllers/palets.controller.js';
import { validId, validObjectBody } from '../middlewares/palet.middleware.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../../swagger.js';

const paletroutes = Router();
const paletsControllers = new controllerPalets();

// routes.get('/api-docs', swaggerUi.serve);
// routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

paletroutes.get('/all-palets', paletsControllers.findPaletsController);

paletroutes.get(
  '/palet/:id',
  validId,
  paletsControllers.findPaletByIdController,
);

paletroutes.post(
  '/create',
  validObjectBody,
  paletsControllers.createPaletController,
);

paletroutes.put(
  '/update/:id',
  validId,
  validObjectBody,
  paletsControllers.updatePaletController,
);

paletroutes.delete(
  '/delete/:id',
  validId,
  paletsControllers.deletePaletController,
);

export default paletroutes;
