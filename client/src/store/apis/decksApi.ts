import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Deck } from '../../types';

const decksApi = createApi({
	reducerPath: 'decks',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5000',
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

			addDeck: builder.mutation<void, string>({
				query: (deckTitle) => {
					return {
						url: '/decks',
						body: { title: deckTitle },
						method: 'POST',
					};
				},
				invalidatesTags: ['Deck'],
			}),
		};
	},
});

export { decksApi };
export const { useFetchDecksQuery, useAddDeckMutation } = decksApi;
