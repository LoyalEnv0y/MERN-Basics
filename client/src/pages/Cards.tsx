import { useParams } from 'react-router-dom';
import { useAddCardMutation, useFetchCardsQuery } from '../store';
import { Card } from '../types';

const Cards = () => {
	const { deckId } = useParams();
	const { data, error, isFetching } = useFetchCardsQuery(deckId || '');
	const [addCard, result] = useAddCardMutation();

	const handleAddCard = () => {
		const newCard: Card = { title: 'Test', body: 'Test Card Body' };
		addCard({ deckId: deckId || '', card: newCard });
	};

	return (
		<>
			<div>
				{data?.map((card) => (
					<p key={card._id}>{card.title}</p>
				))}
			</div>

			<button onClick={handleAddCard}>Add Card</button>
		</>
	);
};

export default Cards;
