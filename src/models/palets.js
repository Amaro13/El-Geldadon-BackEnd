import mongoose from 'mongoose';

const PaletSchema = new mongoose.Schema({
  flavor: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Palet = mongoose.model('palets', PaletSchema);
