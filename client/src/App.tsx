import { useEffect, useState } from 'react';
import DeckList from './components/DeckList';
import NewDeckForm from './components/NewDeckForm';
import axios from 'axios';
import { Deck } from './types/index';

import './styles/app.css';

function App() {
	const [decks, setDecks] = useState<Deck[]>([]);

	const addDeck = async (newDeck: Deck) => {
		setDecks([...decks, newDeck]);
	};

	const deleteDeck = async (id: number) => {
		try {
			await axios.delete(`http://localhost:5000/decks/${id}`);
			setDecks(decks.filter((deck) => deck._id !== id));
		} catch (err) {
			console.log('Error deleting deck. Error Message => ', err);
		}
	};

	useEffect(() => {
		const fetchDecks = async () => {
			try {
				const response = await axios.get('http://localhost:5000/decks');
				setDecks(response.data);
			} catch (err) {
				return <h3>Error while getting decks 🙀</h3>;
			}
		};

		fetchDecks();
	}, []);

	return (
		<>
			<DeckList decks={decks} handleDeleteDeck={deleteDeck} />
			<NewDeckForm handleAddDeck={addDeck} />
		</>
	);
}

export default App;
