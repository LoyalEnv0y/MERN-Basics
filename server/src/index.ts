import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import deckRouter from './routes/deck';
import cardRouter from './routes/card';

const app = express();
const port = 4000;

// Mongoose Connection
mongoose
	.connect(process.env.MONGO_URL ?? '')
	.then(() => console.log('Mongo Atlas connection successful'))
	.catch((err) =>
		console.log('Error when connecting to Mongo Atlas. ERROR MESSAGE => ', err)
	);

// Configs
app.use(express.json());

const corsOptions = {
	origin: 'https://cetintekin-portfolio.com',
};

app.use(cors(corsOptions));

// app.use(cors({ origin: '*' }));

// Routes
app.use('/decks', deckRouter);
app.use('/decks/:deckId/cards', cardRouter);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
