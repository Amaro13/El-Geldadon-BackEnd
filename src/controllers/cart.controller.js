import * as CartService from '../services/cart.service.js';

export const findAllCartController = async (req, res) => {
  const allCart = await CartService.findAllCartService();
  if (!allCart) {
    return res.status(404).send({ message: 'Your cart is empty!' });
  }
  res.send(allCart);
};

export const createItemsCartController = async (req, res) => {
  const cart = req.body;
  const newCart = await CartService.createItemsCartService(cart);
  res.status(201).send(newCart);
};

export const deleteItemsCartController = async (req, res) => {
  await CartService.deleteItemsCartService();
  res.send({ message: 'Cart has been deleted!' });
};
