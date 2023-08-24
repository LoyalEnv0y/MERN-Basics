import { Request, Response } from 'express';
import Deck from '../models/Deck';

export const getAllDecks = async (req: Request, res: Response) => {
	const decks = await Deck.find({});
	res.json(decks);
};

export const addDeck = async (req: Request, res: Response) => {
	const { title, description } = req.body;

	const newDeck = new Deck({
		title,
		description,
	});

	const createdDeck = await newDeck.save();

	res.json(createdDeck);
};

export const updateDeck = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { deck } = req.body;

	const updatedDeck = await Deck.findByIdAndUpdate(id, {
		title: deck.title,
		description: deck.description,
	});

	res.json(updatedDeck);
};

export const deleteDeck = async (req: Request, res: Response) => {
	const { id } = req.params;

	const deletedDeck = await Deck.findByIdAndDelete(id);

	res.json(deletedDeck);
};
