import express from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';

const app = express();
const port = 5000;

mongoose
	.connect(
		'mongodb+srv://LoyalEnv0y:RLvCtC1fUgRFfYfK@mern-main.br77pyu.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => console.log('Mongo Atlas connection successful'))
	.catch((err) =>
		console.log('Error when connecting to Mongo Atlas. ERROR MESSAGE => ', err)
	);

app.get('/', (req, res) => {
	res.send('<h1>Welcome Here</h1>');
});

app.post('/decks', async (req, res) => {
	const newDeck = new Deck({
		title: 'Example Title',
	});

	const createdDeck = await newDeck.save();

	res.json(createdDeck);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
