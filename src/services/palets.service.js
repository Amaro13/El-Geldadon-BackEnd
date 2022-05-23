const palets = [
  {
    id: 1,
    flavor: 'Açaí com Leite Condensado',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    photo: 'assets/images/acai-com-leite-condensado.png',
    price: 10.0,
  },
  {
    id: 2,
    flavor: 'Banana com Nutella',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    photo: 'assets/images/banana-com-nutella.png',
    price: 10.0,
  },
  {
    id: 3,
    flavor: 'Chocolate Belga',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    photo: 'assets/images/chocolate-belga.png',
    price: 7.0,
  },
  {
    id: 4,
    flavor: 'Limão',
    description:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    photo: 'assets/images/limao.png',
    price: 14.0,
  },
];

export const findPaletsService = () => {
  return palets;
};

export const findPaletByIdService = (id) =>
  palets.find((palet) => palet.id == id);

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
