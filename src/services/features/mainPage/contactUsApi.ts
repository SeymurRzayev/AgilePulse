
import type { ContactUsEntry, FindAllContactUsResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

export const contactUsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        findAllContactUs: build.query<FindAllContactUsResponse, void>({
            query: () => ({
                url: '/contactUs/all',
                method: 'GET',
            }),
        }),

        findContactUsById: build.query<ContactUsEntry, number>({
            query: (id) => ({
                url: `/contactUs/get/${id}`,
                method: 'GET',
            }),
        }),
        createContactUs: build.mutation<ContactUsEntry, { data: ContactUsEntry }>({
            query: ({ data }) => ({
                url: '/contactUs',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});


export const { useFindAllContactUsQuery, useFindContactUsByIdQuery, useCreateContactUsMutation } = contactUsApi;
