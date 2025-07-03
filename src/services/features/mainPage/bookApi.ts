import type { BookByIdResponse, GetAllBookResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBook: builder.query<GetAllBookResponse, void>({
            query: () => ({
                url: `/book/all`,
                method: 'GET',
            }),
            providesTags: ['Book'],
        }),

        getBookById: builder.query<BookByIdResponse, number>({
            query: (id) => ({
                url: `/book/get/${id}`,
                method: 'GET',
            }),
            providesTags: (_result, _error, id) => [{ type: 'Book', id }],
        }),

        createBook: builder.mutation<void, FormData>({
            query: (data) => ({
                url: '/book/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Book'],
        }),

        updateBook: builder.mutation<void, { bookId: number, formData: FormData }>({
            query: ({ bookId, formData }) => ({
                url: `/book/update/${bookId}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['Book'],
        }),

        deleteBook: builder.mutation<void, number>({
            query: (id) => ({
                url: `/book/disable/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['Book'],
        }),
    }),
});


export const {
    useGetAllBookQuery,
    useGetBookByIdQuery,
    useUpdateBookMutation,
    useDeleteBookMutation,
    useCreateBookMutation
} = bookApi;