
import type { GetAllFaqResponse, GetByIdFaq, FaqRes } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

export const faqApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllFaqs: build.query<GetAllFaqResponse, void>({
            query: () => ({
                url: '/faqs/all',
                method: 'GET',
            }),
            transformResponse: (response: GetAllFaqResponse) => response,
            providesTags: ['FAQ'],
        }),
        getFaqById: build.query<GetByIdFaq, number>({
            query: (id) => ({
                url: `/faqs/get/${id}`,
                method: 'GET',
            }),
        }),
        createFaq: build.mutation<FaqRes, { data: FaqRes }>({
            query({ data }) {
                return {
                    url: `faqs/create?question=${data.question}&answer=${data.answer}`,
                    method: "POST",
                };
            },
            invalidatesTags: ['FAQ'],
        }),
        updateFaq: build.mutation<FaqRes, { faq: FaqRes; id: number }>({
            query: ({ faq, id }) => ({
                url: `/faqs/update/${id}?question=${faq.question}&answer=${faq.answer}`,
                method: 'PUT',
            }),
            invalidatesTags: ['FAQ'],
        }),
        deleteFaq: build.mutation<void, number>({
            query: (id) => ({
                url: `/faqs/disable/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['FAQ'],
        }),
    })
});

export const { useGetAllFaqsQuery, useGetFaqByIdQuery, useCreateFaqMutation, useUpdateFaqMutation, useDeleteFaqMutation } = faqApi;
