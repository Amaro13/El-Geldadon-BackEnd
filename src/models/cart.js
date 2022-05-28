import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  flavor: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
});

export const Cart = mongoose.model('cart', CartSchema);
