// React & Types
import { useEffect, useState, useRef, FC } from 'react';
import { Deck } from '../types/index';

// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

// Store
import { useDeleteDeckMutation } from '../store';

// Components
import EditDeckForm from './EditDeckForm';
import { Link } from 'react-router-dom';

interface DeckListItemProps {
	deck: Deck;
}

const DeckListItem: FC<DeckListItemProps> = ({ deck }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [isOnEdit, setIsOnEdit] = useState(false);
	const menu = useRef<HTMLDivElement | null>(null);
	const [deleteDeck, results] = useDeleteDeckMutation();

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
		deleteDeck(deck).unwrap();
	};

	const handleAllowEdit = () => {
		setIsOnEdit(!isOnEdit);
		setMenuIsOpen(false);
	};

	const generateDeleteBtn = () => {
		if (results.isLoading) return <AutorenewIcon className="loading" />;
		if (results.error) return <PriorityHighIcon />;
		return <DeleteIcon onClick={handleDelete} />;
	};

	const getDeckItemBody = () => {
		if (isOnEdit)
			return (
				<EditDeckForm
					deck={deck}
					handleCancelEdit={() => setIsOnEdit(false)}
				/>
			);

		return (
			<>
				<div className="deck-title">{deck.title}</div>
				<div className="deck-description">{deck.description}</div>
			</>
		);
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
							{generateDeleteBtn()}
						</button>
						<button className="menu-btn edit-btn" title="Edit">
							<EditIcon onClick={handleAllowEdit} />
						</button>
					</div>
				)}
			</div>

			<Link to={`/decks/${deck._id}`} className="deck-item-body">
				{getDeckItemBody()}
			</Link>
		</div>
	);
};

export default DeckListItem;
