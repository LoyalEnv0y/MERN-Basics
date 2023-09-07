import { FC, useState } from 'react';
import { useAddCardMutation } from '../store';
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface NewCardFormProps {
	deckId: string;
}

const NewCardForm: FC<NewCardFormProps> = ({ deckId }) => {
	const [cardInfo, setCardInfo] = useState({
		title: '',
		body: '',
	});
	const [addDeck, results] = useAddCardMutation();

	const handleChange = (
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setCardInfo({ ...cardInfo, [evt.target.name]: evt.target.value });
	};

	const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		addDeck({ deckId, card: cardInfo });
		setCardInfo({ title: '', body: '' });
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<section className="deck-info">
				<label htmlFor="card-title">Card Title:</label>
				<input
					type="text"
					id="card-title"
					name="title"
					onChange={handleChange}
					value={cardInfo.title}
				/>
			</section>

			<section className="deck-info">
				<label htmlFor="card-body">Card Body:</label>
				<textarea
					id="card-body"
					name="body"
					onChange={handleChange}
					value={cardInfo.body}
					style={{ width: '185px' }}
				/>
			</section>

			<button className="btn">
				{results.isLoading ? (
					<AutorenewIcon className="loading" />
				) : (
					'Create Card'
				)}
			</button>
		</form>
	);
};

export default NewCardForm;
