import paletsService from '../services/palets.service.js';

const paletsservice = new paletsService();

class controllerPalets {
  async findPaletsController(req, res) {
    const allPalets = await paletsservice.findPaletsService();
    if (allPalets.length == 0) {
      return res.status(404).send({ message: 'There is no registered Palet!' });
    }
    res.send(allPalets);
  }

  async findPaletByIdController(req, res) {
    const idParam = req.params.id;

    const chosenPalet = await paletsservice.findPaletByIdService(idParam);

    if (!chosenPalet) {
      return res.status(404).send({ message: 'Palet not found!' });
    } //mongoDB in middleware

    res.send(chosenPalet);
  }

  async createPaletController(req, res) {
    const palet = req.body;

    try {
      const newPalet = await paletsservice.createPaletService(palet);
      res.status(201).send(newPalet);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Flavor already registered!');
      }
    }
  }

  async updatePaletController(req, res) {
    const idParam = req.params.id;
    const paletEdit = req.body;
    try {
      const updatedPalet = await paletsservice.updatePaletService(
        idParam,
        paletEdit,
      );

      res.send(updatedPalet);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Flavor already registered!');
      }
    }
  }

  async deletePaletController(req, res) {
    const idParam = req.params.id;

    await paletsservice.deletePaletService(idParam);
    res.send({ message: 'Palet deleted with success!' });
  }
}

export default controllerPalets;
