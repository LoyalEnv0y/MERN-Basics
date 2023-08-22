import DeckListItem from './DeckListItem';
import { Deck } from '../types/index';

interface DeckListProps {
	decks: Deck[];
}

function DeckList(props: DeckListProps) {
	const { decks } = props;

	return (
		<div className="deck-list">
			{decks.map((deck) => (
				<DeckListItem key={deck._id} deck={deck} />
			))}
		</div>
	);
}

export default DeckList;
