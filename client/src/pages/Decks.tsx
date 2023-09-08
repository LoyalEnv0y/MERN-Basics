import DeckListItem from '../components/DeckListItem';
import Skeleton from '../components/Skeleton';
import { useFetchDecksQuery } from '../store';
import { Deck } from '../types/index';

const Decks = () => {
	const { data, error, isFetching } = useFetchDecksQuery();
	console.log("data => ", data)
	console.log("error => ", error)
	console.log("isFetching => ", isFetching)

	// TODO: Implement better error result.
	if (error) {
		return <div>An error has occurred</div>;
	}

	if (isFetching) {
		return <Skeleton times={4} width={230} height={250} />;
	}

	return (
		<div className="deck-list">
			{data?.map((deck: Deck) => (
				<DeckListItem key={deck._id} deck={deck} />
			))}
		</div>
	);
};

export default Decks;
