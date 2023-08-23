// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Pages
import App from './App.tsx';
import Deck from './components/Deck.tsx';

// Store and Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/decks/:id',
		element: <Deck />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
