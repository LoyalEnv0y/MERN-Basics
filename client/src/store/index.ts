import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { decksApi } from './apis/decksApi';

const store = configureStore({
	reducer: {
		[decksApi.reducerPath]: decksApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(decksApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store };
export {
	useFetchDecksQuery,
	useAddDeckMutation,
	useDeleteDeckMutation,
} from './apis/decksApi';
