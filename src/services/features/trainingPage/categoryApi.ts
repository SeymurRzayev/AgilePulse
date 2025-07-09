import type { CategoriesResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<CategoriesResponse[], void>({
            query: () => ({
                url: '/categories/all',
                method: 'GET',
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Categories' as const, id })),
                        { type: 'Categories', id: 'LIST' },
                    ]
                    : [{ type: 'Categories', id: 'LIST' }],
        }),
        updateCategory: builder.mutation<CategoriesResponse, CategoriesResponse>({
            query: (category) => ({
                url: `/categories/${category.id}?name=${category.name}`,
                method: 'PUT',
            }),
            invalidatesTags: (_result, _error, arg) => [
                { type: 'Categories', id: arg.id },
                { type: 'Categories', id: 'LIST' },
            ],
        }),
        createCategory: builder.mutation<CategoriesResponse, { name: string }>({
            query: (category) => ({
                url: '/categories/create?name=' + category.name,
                method: 'POST',
            }),
            invalidatesTags: [{ type: 'Categories', id: 'LIST' }],
        }),
        deleteCategory: builder.mutation<CategoriesResponse, { id: number }>({
            query: (category) => ({
                url: '/categories/' + category.id,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Categories', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    useUpdateCategoryMutation,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi
