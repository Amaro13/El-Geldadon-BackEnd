import { Cart } from '../models/cart.js';

export const findAllCartService = async () => {
  const allCart = await Cart.find();
  return allCart;
};

export const createItemsCartService = async (newCart) => {
  const createdCart = await Cart.insertMany(newCart);
  return createdCart;
};
export const deleteItemsCartService = async () => {
  return await Cart.deleteMany();
};
