import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { decksApi } from './apis/decksApi';
import { cardsApi } from './apis/cardsApi';

const store = configureStore({
	reducer: {
		[decksApi.reducerPath]: decksApi.reducer,
		[cardsApi.reducerPath]: cardsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(decksApi.middleware)
			.concat(cardsApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store };
export {
	useFetchDecksQuery,
	useAddDeckMutation,
	useEditDeckMutation,
	useDeleteDeckMutation,
} from './apis/decksApi';

export {
	useFetchCardsQuery,
	useAddCardMutation,
	useDeleteCardMutation,
} from './apis/cardsApi';
