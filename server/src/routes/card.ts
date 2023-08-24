import { getCards } from '../controllers/card';
import express from 'express';
const router = express.Router({ mergeParams: true });

router.route('/').get(getCards);

export default router;
