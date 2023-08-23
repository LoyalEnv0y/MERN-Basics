import DeckListItem from './DeckListItem';
import { useFetchDecksQuery } from '../store';
import { Deck } from '../types/index';

const DeckList = () => {
	const { data, error, isFetching } = useFetchDecksQuery();

	// TODO: Implement better loading and error results.
	if (error) {
		return <div>An error has occurred</div>;
	}

	if (isFetching) {
		return <div>Loading...</div>;
	}

	return (
		<div className="deck-list">
			{data?.map((deck: Deck) => (
				<DeckListItem key={deck._id} deck={deck} />
			))}
		</div>
	);
}

export default DeckList;
