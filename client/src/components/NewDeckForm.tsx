import { useState } from 'react';
import { useAddDeckMutation } from '../store';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const NewDeckForm = () => {
	const [deckInfo, setDeckInfo] = useState({
		title: '',
		description: '',
	});
	const [addDeck, results] = useAddDeckMutation();

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setDeckInfo({ ...deckInfo, [evt.target.name]: evt.target.value });
	};

	const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		addDeck(deckInfo);
		setDeckInfo({ title: '', description: '' });
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<section className="deck-info">
				<label htmlFor="deck-title">Deck Title:</label>
				<input
					type="text"
					id="deck-title"
					name="title"
					onChange={handleChange}
					value={deckInfo.title}
				/>
			</section>

			<section className="deck-info">
				<label htmlFor="deck-desc">Deck Description:</label>
				<input
					type="text"
					id="deck-desc"
					name="description"
					onChange={handleChange}
					value={deckInfo.description}
				/>
			</section>

			<button className="btn">
				{results.isLoading ? (
					<AutorenewIcon className="loading" />
				) : (
					'Create Deck'
				)}
			</button>
		</form>
	);
};

export default NewDeckForm;
