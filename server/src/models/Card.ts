import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
	title: {
		type: String,
		require: true,
	},

	body: {
		type: String,
	},
});

export default mongoose.model('Card', cardsSchema);
