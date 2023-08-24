import mongoose from 'mongoose';
import Card from './Card';

const Schema = mongoose.Schema;

const Deck = new Schema({
	title: {
		type: String,
		require: true,
	},

	description: {
		type: String,
	},

	cards: [
		{
			type: Schema.Types.ObjectId,
			ref: Card,
		},
	],
});

export default mongoose.model('Deck', Deck);
