import NewDeckForm from './components/NewDeckForm';
import Decks from './pages/Decks';

import './styles/app.css';

function App() {
	return (
		<>
			<p className='version'>0.2.1</p>
			<Decks />
			<NewDeckForm />
		</>
	);
}

export default App;
