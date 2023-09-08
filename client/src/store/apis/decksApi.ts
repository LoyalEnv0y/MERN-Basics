import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Deck } from '../../types';

// DEV ONLY!!!
// const delay = (duration: number) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

const URL = import.meta.env.DEV
	? 'http://localhost:4000'
	: 'https://deckio.onrender.com';

const decksApi = createApi({
	reducerPath: 'decks',
	baseQuery: fetchBaseQuery({
		baseUrl: URL,
		fetchFn: async (...args) => {
			// await delay(100);
			return fetch(...args);
		},
	}),
	tagTypes: ['Deck'],
	endpoints(builder) {
		return {
			fetchDecks: builder.query<Deck[], void>({
				query: () => {
					return {
						url: '/decks',
						method: 'GET',
					};
				},
				providesTags: ['Deck'],
			}),

			addDeck: builder.mutation<void, Deck>({
				query: (deck) => {
					return {
						url: '/decks',
						body: { title: deck.title, description: deck.description },
						method: 'POST',
					};
				},
				invalidatesTags: ['Deck'],
			}),

			editDeck: builder.mutation<void, Deck>({
				query: (deck) => {
					return {
						url: `/decks/${deck._id}`,
						body: { deck },
						method: 'PUT',
					};
				},
				invalidatesTags: ['Deck'],
			}),

			deleteDeck: builder.mutation<void, Deck>({
				query: (deck) => {
					return {
						url: `/decks/${deck._id}`,
						method: 'DELETE',
					};
				},
				invalidatesTags: ['Deck'],
			}),
		};
	},
});

export { decksApi };
export const {
	useFetchDecksQuery,
	useAddDeckMutation,
	useEditDeckMutation,
	useDeleteDeckMutation,
} = decksApi;
