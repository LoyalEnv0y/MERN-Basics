import { useState } from 'react';
import { useAddDeckMutation } from '../store';

function NewDeckForm() {
	const [title, setTitle] = useState<string>('');
	const [addDeck, results] = useAddDeckMutation();
	// TODO: DELETE BELOW AND IMPLEMENT PROPER ERRORS AND LOADERS
	console.log(results)

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
