import axios from 'axios';
import { useEffect, useState } from 'react';
import DeckListItem from './DeckListItem';

interface Deck {
	_id: number;
	title: string;
}

function DeckList() {
	const [decks, setDecks] = useState<Deck[]>([]);

	useEffect(() => {
		const fetchDecks = async () => {
			try {
				const response = await axios.get('http://localhost:5000/decks');
				setDecks(response.data);
				console.log(response);
			} catch (err) {
				return <h3>Error while getting decks 🙀</h3>;
			}
		};

		fetchDecks();
	}, []);

	return (
		<div>
			{decks.map((deck: Deck) => (
				<DeckListItem key={deck._id} deck={deck} />
			))}
		</div>
	);
}

export default DeckList;
