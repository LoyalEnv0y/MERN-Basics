import { Deck } from '../types/index';

interface DeckListItemProps {
	deck: Deck;
}

function DeckListItem(props: DeckListItemProps) {
	const { deck } = props;

	return <div>{deck.title}</div>;
}

export default DeckListItem;
