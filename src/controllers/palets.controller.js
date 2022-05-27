import * as paletsService from '../services/palets.service.js';
import mongoose from 'mongoose';

// const paletsService = require('../services/paletas.service');
// const paletsService = palets;
export const findPaletsController = async (req, res) => {
  const allPalets = await paletsService.findPaletsService();
  if (allPalets.length == 0) {
    return res.status(404).send({ message: 'There is no registered Palet!' });
  }
  res.send(allPalets);
};

export const findPaletByIdController = async (req, res) => {
  const idParam = req.params.id;
  // if (!idParam) {
  //   return res.status(404).send({ message: 'Palet not found!' });
  // }
  // if (!mongoose.Types.ObjectId.isValid(idParam)) {
  //   res.status(400).send({ message: 'Invalid ID!' });
  //   return;
  // } // with mongoDB

  const chosenPalet = await paletsService.findPaletByIdService(idParam);

  if (!chosenPalet) {
    return res.status(404).send({ message: 'Palet not found!' });
  } //mongoDB in middleware

  res.send(chosenPalet);
};

export const createPaletController = async (req, res) => {
  const palet = req.body;
  // if (
  //   !palet ||
  //   !palet.flavor ||
  //   !palet.description ||
  //   !palet.photo ||
  //   !palet.price
  // ) {
  //   return res.status(400).send({
  //     mensagem:
  //       'You have not filled all the required info to add the palet into the menu!',
  //   });
  // } //in middleware

  const newPalet = await paletsService.createPaletService(palet);
  res.status(201).send(newPalet);
};

export const updatePaletController = async (req, res) => {
  const idParam = req.params.id;
  const paletEdit = req.body;
  // const chosenPalet = paletsService.findPaletByIdService(idParam);
  // if (!chosenPalet) {
  //   return res.status(404).send({ message: 'Palet not found!' });
  // } //Not mongoDB

  // if (!mongoose.Types.ObjectId.isValid(idParam)) {
  //   res.status(400).send({ message: 'Invalid ID!' });
  //   return;
  // } //in middleware

  // if (
  //   !paletEdit ||
  //   !paletEdit.flavor ||
  //   !paletEdit.description ||
  //   !paletEdit.photo ||
  //   !paletEdit.price
  // ) {
  //   return res.status(400).send({
  //     message:
  //       'You have not filled all the required info to edit the palet into the menu!',
  //   });
  // } //in middleware
  const updatedPalet = await paletsService.updatePaletService(
    idParam,
    paletEdit,
  );

  res.send(updatedPalet);
};

export const deletePaletController = async (req, res) => {
  const idParam = req.params.id;
  // const chosenPalet = paletsService.findPaletByIdService(idParam);
  // if (!idParam) {
  //   return res.status(404).send({ message: 'Palet not found!' });
  // } // Not MondoDB
  // if (!mongoose.Types.ObjectId.isValid(idParam)) {
  //   res.status(400).send({ message: 'Invalid ID!' });
  //   return;
  // } // In middleware

  await paletsService.deletePaletService(idParam);
  res.send({ message: 'Palet deleted with success!' });
};

// module.exports = {
//   findPaletasController,
//   findPaletaByIdController,
//   createPaletaController,
//   updatePaletaController,
//   deletePaletaController,
// };
