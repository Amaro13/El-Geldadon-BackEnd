import Palet from '../models/palets.js';

class paletsService {
  async findPaletsService() {
    const palets = await Palet.find();
    if (palets.length === 0) {
      throw { status: 404, message: 'No palets found!' };
    }
    return palets;
  }

  async findPaletByIdService(id) {
    const palet = await Palet.findById(id);
    return palet;
  }

  async createPaletService(newPalet) {
    try {
      const createdPalet = await Palet.create(newPalet); // Now with mongoDB
      return createdPalet;
    } catch (error) {
      throw error;
    }
  }

  async updatePaletService(id, paletEdited) {
    try {
      const UpdatePalet = await Palet.findByIdAndUpdate(id, paletEdited); // Now with mongoDB
      return UpdatePalet;
    } catch (error) {
      throw error;
    }
  }

  async deletePaletService(id) {
    return await Palet.findByIdAndDelete(id); // Now with mongoDB
  }
}

export default paletsService;
