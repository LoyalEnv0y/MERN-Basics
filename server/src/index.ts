import express from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import 'dotenv/config';

const app = express();
const port = 5000;

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL ?? '')
	.then(() => console.log('Mongo Atlas connection successful'))
	.catch((err) =>
		console.log('Error when connecting to Mongo Atlas. ERROR MESSAGE => ', err)
	);

app.get('/', (req, res) => {
	res.send('<h1>Welcome Here</h1>');
});

app.post('/decks', async (req, res) => {
	const { title } = req.body;

	const newDeck = new Deck({
		title,
	});

	const createdDeck = await newDeck.save();

	res.json(createdDeck);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
