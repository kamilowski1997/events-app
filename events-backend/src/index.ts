import express from 'express';
import cors from 'cors';
import addEvent from './routes/events/addEvent';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(`/api/events/add`, addEvent);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
