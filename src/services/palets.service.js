// const palets = [
//   {
//     id: 1,
//     flavor: 'Açaí with condensed milk',
//     description:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     photo: 'assets/images/acai-com-leite-condensado.png',
//     price: 10.0,
//   },
//   {
//     id: 2,
//     flavor: 'Banana with Nutella',
//     description:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     photo: 'assets/images/banana-com-nutella.png',
//     price: 10.0,
//   },
//   {
//     id: 3,
//     flavor: 'Belgian Chocolate',
//     description:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     photo: 'assets/images/chocolate-belga.png',
//     price: 7.0,
//   },
//   {
//     id: 4,
//     flavor: 'Lemon',
//     description:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//     photo: 'assets/images/limao.png',
//     price: 14.0,
//   },
// ];

import { Palet } from '../models/palets.js';

export const findPaletsService = async () => {
  const palets = await Palet.find();
  return palets;
};

export const findPaletByIdService = async (id) => {
  const palet = await Palet.findById(id);
  return palet;
};

export const createPaletService = (newPalet) => {
  const newId = palets.length + 1;
  newPalet.id = newId;
  palets.push(newPalet);
  return newPalet;
};

export const updatePaletService = (id, paletEdited) => {
  paletEdited['id'] = id;
  const paletIndex = palets.findIndex((palet) => palet.id == id);
  palets[paletIndex] = paletEdited;
  return paletEdited;
};

export const deletePaletService = (id) => {
  const paletIndex = palets.findIndex((palet) => palet.id == id);
  return palets.splice(paletIndex, 1);
};
