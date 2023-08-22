import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import Deck from './models/Deck';

const app = express();
const port = 5000;

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);

mongoose
	.connect(process.env.MONGO_URL ?? '')
	.then(() => console.log('Mongo Atlas connection successful'))
	.catch((err) =>
		console.log('Error when connecting to Mongo Atlas. ERROR MESSAGE => ', err)
	);

app.get('/', (req, res) => {
	res.send('<h1>Welcome Here</h1>');
});

app.get('/decks', async (req, res) => {
	const decks = await Deck.find({});
	res.json(decks);
});

app.post('/decks', async (req, res) => {
	const { title } = req.body;

	const newDeck = new Deck({
		title,
	});

	const createdDeck = await newDeck.save();

	res.json(createdDeck);
});

app.delete('/decks/:id', async (req, res) => {
	const { id } = req.params;

	const deletedDeck = await Deck.findByIdAndDelete(id);

	res.json(deletedDeck);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
