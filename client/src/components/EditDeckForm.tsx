import { FC, useState } from 'react';
import { Deck } from '../types';
import { useEditDeckMutation } from '../store';
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface EditDeckFromProps {
	deck: Deck;
	handleCancelEdit: () => void;
}

const EditDeckForm: FC<EditDeckFromProps> = ({ deck, handleCancelEdit }) => {
	const [deckInfo, setDeckInfo] = useState({
		_id: deck._id,
		title: deck.title,
		description: deck.description,
	});
	const [editDeck, results] = useEditDeckMutation();

	const handleChange = (
		evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setDeckInfo({ ...deckInfo, [evt.target.name]: evt.target.value });
	};

	const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		editDeck(deckInfo);
	};

	const style = {
		backgroundColor: '#3f3f3f',
		color: '#FFF',
		marginTop: '10px',
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="deck-title">
				<input
					type="text"
					name="title"
					onChange={handleChange}
					value={deckInfo.title}
				/>
			</div>
			<div className="deck-description">
				<textarea
					name="description"
					onChange={handleChange}
					value={deckInfo.description}
				/>
			</div>

			<button className="btn" style={style}>
				{results.isLoading ? <AutorenewIcon className='loading'/> : 'Confirm' }
			</button>

			<button
				className="btn"
				style={{...style, marginLeft: '5px'}}
				type="button"
				onClick={handleCancelEdit}
			>
				Cancel
			</button>
		</form>
	);
};

export default EditDeckForm;
