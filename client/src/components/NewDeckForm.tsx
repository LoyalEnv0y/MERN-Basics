import { useState } from 'react';
import { useAddDeckMutation } from '../store';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const NewDeckForm = () => {
	const [title, setTitle] = useState<string>('');
	const [addDeck, results] = useAddDeckMutation();

	const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(evt.target.value);
	};

	const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		addDeck(title);
		setTitle('');
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<section className="deck-info">
				<label htmlFor="deck-title">New Deck Title:</label>
				<input
					type="text"
					id="deck-title"
					onChange={handleTitleChange}
					value={title}
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
