import type { BookByIdResponse, GetAllBookResponse } from "../../types/types";
import { baseApi } from "../api/baseApi";


const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBook: builder.query<GetAllBookResponse, void>({
            query: () => ({
                url: `/book/all`,
                method: 'GET',
            }),
        }),
        getBookById: builder.query<BookByIdResponse, number>({
            query: (id) => ({
                url: `/book/get/${id}`,
                method: 'GET',
            }),
        }),
    })
})

export const { useGetAllBookQuery, useGetBookByIdQuery } = bookApi;