import type { BookByIdResponse, GetAllBookResponse, Book } from "../../types/types";
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
        updateBook: builder.mutation<void, { bookId: number, formData: FormData }>({
            query: ({ bookId, formData }) => ({
                url: `/book/update/${bookId}`,
                method: 'PUT',
                body: formData,
                formData: true,
            }),
        }),
        deleteBook: builder.mutation<void, number>({
            query: (id) => ({
                url: `/book/disable/${id}`,
                method: 'PUT',
            }),
        }),
    })
})

export const { useGetAllBookQuery, useGetBookByIdQuery, useUpdateBookMutation, useDeleteBookMutation } = bookApi;