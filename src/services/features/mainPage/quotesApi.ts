import type { GetRandomQuotesRes } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const quotesApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getRandomQuotes: builder.query<GetRandomQuotesRes, void>({
            query: () => ({
                url: '/quotes/random',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetRandomQuotesQuery } = quotesApi;