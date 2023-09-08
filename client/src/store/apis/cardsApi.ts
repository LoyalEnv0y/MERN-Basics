import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Card } from '../../types';

// DEV ONLY!!!
// const delay = (duration: number) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

const URL = import.meta.env.DEV
	? 'http://localhost:4000'
	: 'https://deckio.onrender.com';
	
const cardsApi = createApi({
	reducerPath: 'cards',
	baseQuery: fetchBaseQuery({
		baseUrl: URL,
		fetchFn: async (...args) => {
			// await delay(100);
			return fetch(...args);
		},
	}),
	tagTypes: ['Card'],
	endpoints(builder) {
		return {
			fetchCards: builder.query<Card[], string>({
				query: (deckId) => {
					return {
						url: `/decks/${deckId}/cards`,
						method: 'GET',
					};
				},
				providesTags: ['Card'],
			}),

			addCard: builder.mutation<void, { deckId: string; card: Card }>({
				query: ({ deckId, card }) => {
					return {
						url: `/decks/${deckId}/cards`,
						body: { card },
						method: 'POST',
					};
				},
				invalidatesTags: ['Card'],
			}),

			// editDeck: builder.mutation<void, Deck>({
			// 	query: (deck) => {
			// 		return {
			// 			url: `/decks/${deck._id}`,
			// 			body: { deck },
			// 			method: 'PUT',
			// 		};
			// 	},
			// 	invalidatesTags: ['Deck'],
			// }),

			deleteCard: builder.mutation<void, { deckId: string; card: Card }>({
				query: ({ deckId, card }) => {
					return {
						url: `decks/${deckId}/cards/${card._id}`,
						method: 'DELETE',
					};
				},
				invalidatesTags: ['Card'],
			}),
		};
	},
});

export { cardsApi };
export const { useFetchCardsQuery, useAddCardMutation, useDeleteCardMutation } =
	cardsApi;
