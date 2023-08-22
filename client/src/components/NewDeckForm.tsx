import { useState } from 'react';
import axios from 'axios';
import { Deck } from '../types/index';

interface NewDeckFormProps {
	handleAddDeck: (newDeck: Deck) => void;
}

function NewDeckForm(props: NewDeckFormProps) {
	const { handleAddDeck } = props;

	const [title, setTitle] = useState<string>('');

	const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(evt.target.value);
	};

	const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		try {
			const resp = await axios.post('http://localhost:5000/decks', {
				title,
			});

			handleAddDeck(resp.data);
		} catch (err) {
			console.log('Error sending deck information => ', err);
		}

		setTitle('');
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label htmlFor="deck-title">New Deck</label>
			<input
				type="text"
				id="deck-title"
				onChange={handleTitleChange}
				value={title}
			/>

			<button>Create Deck</button>
		</form>
	);
}

export default NewDeckForm;
