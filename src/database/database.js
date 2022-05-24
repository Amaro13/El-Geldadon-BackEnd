import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/palets-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTED');
    })
    .catch((err) => {
      return console.log(`Error in database conection: ${err}`);
    });
}
