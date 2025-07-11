import type { GetRandomQuotesRes } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

interface QuoteReq {
    text: string;
    author: string;
}


const quotesApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getRandomQuotes: builder.query<GetRandomQuotesRes, void>({
            query: () => ({
                url: '/quotes/random',
                method: 'GET',
            }),
        }),

        getAllQuotes: builder.query<GetRandomQuotesRes[], void>({
            query: () => ({
                url: '/quotes/search',
                method: 'GET',
            }),
            transformResponse: (response: any) => response.content,
            providesTags: ['Quote'],
        }),

        createQuote: builder.mutation<GetRandomQuotesRes, QuoteReq>({
            query: (quote) => ({
                url: '/quotes/createQuote',
                method: 'POST',
                body: quote,
            }),
            invalidatesTags: ['Quote'],
        }),

        updateQuote: builder.mutation<GetRandomQuotesRes, { quote: QuoteReq; id: number }>({
            query: ({ quote, id }) => ({
                url: `/quotes/updateQuote/${id}`,
                method: 'PUT',
                body: quote,
            }),
            invalidatesTags: ['Quote'],
        }),

        deleteQuote: builder.mutation<void, number>({
            query: (id) => ({
                url: `/quotes/disable/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Quote'],
        }),
    }),
});


export const {
    useGetRandomQuotesQuery,
    useGetAllQuotesQuery,
    useCreateQuoteMutation,
    useUpdateQuoteMutation,
    useDeleteQuoteMutation,
} = quotesApi;