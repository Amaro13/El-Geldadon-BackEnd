import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB ATLAS CONECTED');
    })
    .catch((err) => {
      return console.log(`Error in database conection: ${err}`);
    });
}
