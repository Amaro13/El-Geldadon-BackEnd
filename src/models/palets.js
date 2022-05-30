import mongoose from 'mongoose';

const PaletSchema = new mongoose.Schema(
  {
    flavor: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false },
);

const Palet = mongoose.model('palets', PaletSchema);

export default Palet;
