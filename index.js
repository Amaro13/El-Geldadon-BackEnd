import express from 'express';
import cors from 'cors';
import { routes } from './src/router/palets.route.js';
import { connectToDatabase } from './src/database/database.js';
import 'dotenv/config';

const port = process.env.PORT || 3001;
const app = express();
connectToDatabase();
// REMEMBER TO RUN BACK AND FRONT TOGETHER THIS MEANS RUN DEV AND LIVE-SERVER
// app.use(json());
app.use(cors());
app.use(express.json());
app.use('/palets', routes);

// app.get('/palets/all-palets', function (req, res) {
//   //res.send(palets); with the use json on line 5, you can use .json as a .send
//   res.json(palets); // with the use json on line 5, you can use .json as a .send
//   console.log(palets);
// });

// app.get('/palets/palet/:id', (req, res) => {
//   const idParam = req.params.id;
//   const chosenPalet = palets.find((palets) => palets.id === idParam);
//   res.send(chosenPalet);
// });

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
