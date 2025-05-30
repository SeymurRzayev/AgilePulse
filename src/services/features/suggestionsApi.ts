import type { SuggestionReq, SuggestionRes } from "../../types/types";
import { baseApi } from "../api/baseApi";


const suggestionsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSuggestions: builder.query({
            query: () => ({
                url: '/suggestions/all',
                method: 'GET',
            }),
        }),
        createSuggestion: builder.mutation<SuggestionRes, SuggestionReq>({
            query: (body) => ({
                url: '/suggestions/submit',
                method: 'POST',
                body,
            }),
        }),
        getComplaint: builder.query({
            query: () => ({
                url: '/complaints/findAllComplaints',
                method: 'GET',
            }),
        }),
        createComplaint: builder.mutation<SuggestionRes, SuggestionReq>({
            query: (body) => ({
                url: '/complaints',
                method: 'POST',
                body,
            }),
        })
    })
})

export const {
    useGetSuggestionsQuery,
    useCreateSuggestionMutation,
    useCreateComplaintMutation,
    useGetComplaintQuery
} = suggestionsApi;