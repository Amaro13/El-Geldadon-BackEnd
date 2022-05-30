import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Invalid ID!' });
  }
  next();
};

export const validObjectBody = (req, res, next) => {
  const palet = req.body;
  if (!palet.flavor || !palet.description || !palet.photo || !palet.price) {
    return res
      .status(400)
      .send({ message: 'You have not filled all the required fields!' });
  }
  next();
};

// exports = {
//   validId,
//   validObjectBody,
// };
