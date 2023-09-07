import { addCard, deleteCard, getCards } from '../controllers/card';
import express from 'express';
const router = express.Router({ mergeParams: true });

router.route('/').get(getCards).post(addCard);
router.route('/:id').delete(deleteCard);
export default router;
