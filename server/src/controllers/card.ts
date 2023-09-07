import { Request, Response } from 'express';
import Deck from '../models/Deck';
import Card from '../models/Card';

export const getCards = async (req: Request, res: Response) => {
	const { deckId } = req.params;

	const deck = await Deck.findById(deckId).populate('cards');

	res.json(deck?.cards);
};

export const addCard = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const { card } = req.body;

	const createdCard = await new Card(card).save();
	const deck = await Deck.findByIdAndUpdate(deckId, {
		$push: { cards: createdCard },
	});

	res.json(deck);
};
