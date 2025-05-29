import type { ApiResponse } from "../../types/types";
import { baseApi } from "../api/baseApi";


export const articleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllArticle: build.query<ApiResponse, void>({
            query: () => ({
                url: '/articles/all',
                method: 'GET',
            }),
        }),
    })
});

export const { useGetAllArticleQuery } = articleApi;