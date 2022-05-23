import * as paletsService from '../services/palets.service.js';

// const paletsService = require('../services/paletas.service');
// const paletsService = palets;
export const findPaletsController = (req, res) => {
  const allPalets = paletsService.findPaletsService();
  res.send(allPalets);
};

export const findPaletByIdController = (req, res) => {
  const idParam = Number(req.params.id);
  // if (!idParam) {
  //   return res.status(404).send({ message: 'Palet not found!' });
  // }
  const chosenPalet = paletsService.findPaletByIdService(idParam);
  if (!chosenPalet) {
    return res.status(404).send({ message: 'Palet not found!' });
  }
  res.send(chosenPalet);
};

export const createPaletController = (req, res) => {
  const palet = req.body;
  if (
    !palet ||
    !palet.flavor ||
    !palet.description ||
    !palet.photo ||
    !palet.price
  ) {
    return res.status(400).send({
      mensagem:
        'You have not filled all the required info to add the palet into the menu!',
    });
  }
  const newPalet = paletsService.createPaletService(palet);
  res.send(newPalet);
};

export const updatePaletController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletEdit = req.body;
  const chosenPalet = paletsService.findPaletByIdService(idParam);
  if (!chosenPalet) {
    return res.status(404).send({ message: 'Palet not found!' });
  }

  if (
    !paletEdit ||
    !paletEdit.flavor ||
    !paletEdit.description ||
    !paletEdit.photo ||
    !paletEdit.price
  ) {
    return res.status(400).send({
      message:
        'You have not filled all the required info to edit the palet into the menu!',
    });
  }
  const updatedPalet = paletsService.updatePaletService(idParam, paletEdit);
  res.send(updatedPalet);
};

export const deletePaletController = (req, res) => {
  const idParam = Number(req.params.id);
  // const chosenPalet = paletsService.findPaletByIdService(idParam);
  if (!idParam) {
    return res.status(404).send({ message: 'Palet not found!' });
  } else {
    paletsService.deletePaletService(idParam);
    res.send({ message: 'Palet deleted with success!' });
  }
};

// module.exports = {
//   findPaletasController,
//   findPaletaByIdController,
//   createPaletaController,
//   updatePaletaController,
//   deletePaletaController,
// };
