import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Deck = new Schema({
	title: {
		type: String,
		require: true,
	},

	description: {
		type: String,
	},
});

export default mongoose.model('Deck', Deck);
