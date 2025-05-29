import type { GetAllArticleResponse, GetByIdArticle } from "../../types/types";
import { baseApi } from "../api/baseApi";


export const articleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllArticle: build.query<GetAllArticleResponse, void>({
            query: () => ({
                url: '/articles/all',
                method: 'GET',
            }),
        }),
        getArticleById: build.query<GetByIdArticle, number>({
            query: (id) => ({
                url: `/articles/get/${id}`,
                method: 'GET',
            }),
        }),
    })
});

export const { useGetAllArticleQuery, useGetArticleByIdQuery } = articleApi;