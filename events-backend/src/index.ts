import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import addEvent from './routes/events/addEvent';
import connectDB from './db/connection';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

connectDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use(`/api/events/add`, addEvent);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
