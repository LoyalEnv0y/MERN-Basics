import { useState } from 'react';
import { Deck } from '../types/index';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface DeckListItemProps {
	deck: Deck;
}

function DeckListItem(props: DeckListItemProps) {
	const { deck } = props;
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	return (
		<div className="deck-item">
			<div className="deck-item-header">
				<div
					className="deck-item-menu-button"
					onClick={() => setMenuIsOpen(!menuIsOpen)}
				>
					<MoreVertIcon />
				</div>

				{menuIsOpen && (
					<div className="deck-item-menu">
						<button className="menu-btn delete-btn" title="Delete">
							<DeleteIcon />
						</button>
						<button className="menu-btn edit-btn" title="Edit">
							<EditIcon />
						</button>
					</div>
				)}
			</div>

			<div className="deck-item-body">{deck.title}</div>
		</div>
	);
}

export default DeckListItem;
