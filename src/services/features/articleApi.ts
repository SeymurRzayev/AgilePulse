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
        updateArticle: build.mutation<void, { id: number; data: FormData }>({
            query: ({ id, data }) => ({
                url: `/articles/update/${id}`,
                method: 'PUT',
                body: data,
                formData: true,
            }),
        }),
        deleteArticle: build.mutation<void, number>({
            query: (id) => ({
                url: `/articles/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    })
});

export const { useGetAllArticleQuery, useGetArticleByIdQuery, useUpdateArticleMutation, useDeleteArticleMutation } = articleApi;