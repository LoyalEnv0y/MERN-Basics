import DeckListItem from './DeckListItem';
import { useFetchDecksQuery } from '../store';
import { Deck } from '../types/index';
import Skeleton from './Skeleton';

const DeckList = () => {
	const { data, error, isFetching } = useFetchDecksQuery();

	// TODO: Implement better error result.
	if (error) {
		return <div>An error has occurred</div>;
	}

	if (isFetching) {
		return <Skeleton times={4} width={230} height={250}/>
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
