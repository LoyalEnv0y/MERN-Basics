import { Request, Response } from 'express';
import Deck from '../models/Deck';
import Card from '../models/Card';

export const getCards = async (req: Request, res: Response) => {
	const { deckId } = req.params;

	const deck = await Deck.findById(deckId).populate('cards');

	res.json(deck?.cards);
};
