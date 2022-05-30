export const validObjectBodyCart = (req, res, next) => {
  const cart = req.body;
  cart.forEach((item) => {
    if (!item || !item.flavor) {
      return res
        .status(400)
        .send({ message: 'You have not filled all the required fields!' });
    }
  });
  next();
};
