import express from 'express';
import { addDeck, deleteDeck, getAllDecks, updateDeck } from '../controllers/deck';
const router = express.Router();

router.route('/').get(getAllDecks).post(addDeck);

router.route('/:id').put(updateDeck).delete(deleteDeck);

export default router;
