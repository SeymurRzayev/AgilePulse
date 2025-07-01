import type { CategoriesResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<CategoriesResponse[], void>({
            query: () => ({
                url: '/categories/all',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetCategoriesQuery } = categoryApi
