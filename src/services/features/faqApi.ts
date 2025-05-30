
import type { GetAllFaqResponse, GetByIdFaq, FaqRes } from "../../types/types";
import { baseApi } from "../api/baseApi";

export const faqApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllFaqs: build.query<GetAllFaqResponse, void>({
            query: () => ({
                url: '/faqs/all',
                method: 'GET',
            }),
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
                    url: 'faqs/create',
                    method: "POST",
                    data,
                };
            },
        }),
    })
});

export const { useGetAllFaqsQuery, useGetFaqByIdQuery, useCreateFaqMutation } = faqApi;
