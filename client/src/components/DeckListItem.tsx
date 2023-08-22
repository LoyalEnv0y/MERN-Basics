interface DeckProps {
	deck: {
		_id: number;
		title: string;
	};
}

function DeckListItem(props: DeckProps) {
	const { deck } = props;

	return <div>{deck.title}</div>;
}

export default DeckListItem;
