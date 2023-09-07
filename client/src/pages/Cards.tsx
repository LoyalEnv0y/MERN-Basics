import { useParams } from 'react-router-dom';
import { useDeleteCardMutation, useFetchCardsQuery } from '../store';
import NewCardForm from '../components/NewCardForm';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Card } from '../types';
import Skeleton from '../components/Skeleton';

const Cards = () => {
	const { deckId } = useParams();
	const { data, error, isFetching } = useFetchCardsQuery(deckId || '');
	const [deleteCard, result] = useDeleteCardMutation();

	let content;

	if (error) {
		content = <div>Could not fetch cards</div>;
	} else if (isFetching) {
		content = <Skeleton times={4} width={230} height={250} />;
	} else {
		if (!data?.length) {
			content = (
				<>
					<h4>No Cards in this deck ☹️</h4>
					<h4>You can add some cards below 😄</h4>
				</>
			);
		} else {
			content = data?.map((card) => (
				<div key={card._id} className="deck-item">
					<div className="deck-item-header">
						<button
							className="menu-btn delete-btn"
							onClick={() => handleDeleteCard(card)}
						>
							{result.isLoading ? (
								<AutorenewIcon className="loading" />
							) : (
								<DeleteIcon />
							)}
						</button>
					</div>
					<div className="deck-item-body">
						<div className="deck-title">{card.title}</div>
						<div className="deck-description">{card.body}</div>
					</div>
				</div>
			));
		}
	}

	const handleDeleteCard = (card: Card) => {
		deleteCard({ deckId: deckId || '', card });
	};

	return (
		<>
			<div className="deck-list">{content}</div>

			<NewCardForm deckId={deckId || ''} />
		</>
	);
};

export default Cards;
