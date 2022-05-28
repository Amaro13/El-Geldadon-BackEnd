import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose
    .connect(
      'mongodb+srv://Rikuster:Learning@cluster0.bgnacos.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('MONGO DB CONECTED');
    })
    .catch((err) => {
      return console.log(`Error in database conection: ${err}`);
    });
}
