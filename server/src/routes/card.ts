import { addCard, getCards } from '../controllers/card';
import express from 'express';
const router = express.Router({ mergeParams: true });
// Base URL: http://localhost:5000/decks/:deckId/cards

router.route('/').get(getCards).post(addCard);
export default router;
