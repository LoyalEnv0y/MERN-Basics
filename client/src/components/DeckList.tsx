import DeckListItem from './DeckListItem';
import { Deck } from '../types/index';
import axios from 'axios';

type DeckListProps = {
	decks: Deck[];
	handleDeleteDeck: (id: number) => void;
};

function DeckList(props: DeckListProps) {
	const { decks, handleDeleteDeck } = props;

	return (
		<div className="deck-list">
			{decks.map((deck) => (
				<DeckListItem
					key={deck._id}
					deck={deck}
					handleDeleteDeck={handleDeleteDeck}
				/>
			))}
		</div>
	);
}

export default DeckList;
