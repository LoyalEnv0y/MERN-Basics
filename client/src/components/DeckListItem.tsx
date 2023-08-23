import { useEffect, useState, useRef, FC } from 'react';
import { Deck } from '../types/index';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface DeckListItemProps {
	deck: Deck;
}

const DeckListItem:FC<DeckListItemProps> = ({deck}) => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
	const menu = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handler = (evt: MouseEvent) => {
			const element = menu.current;
			if (!element) return;

			if (!element.contains(evt.target as Node)) {
				setMenuIsOpen(false);
			}
		};

		document.addEventListener('click', handler, true);

		return () => {
			document.removeEventListener('click', handler, true);
		};
	}, []);

	const handleDelete = () => {
		// TODO: implement deleting
		setMenuIsOpen(false);
	};

	return (
		<div className="deck-item">
			<div className="deck-item-header">
				<div
					className={`deck-item-menu-button ${menuIsOpen && 'menu-open'}`}
					onClick={() => setMenuIsOpen(!menuIsOpen)}
				>
					<MoreVertIcon />
				</div>

				{menuIsOpen && (
					<div className="deck-item-menu" ref={menu}>
						<button className="menu-btn delete-btn" title="Delete">
							<DeleteIcon onClick={handleDelete} />
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
