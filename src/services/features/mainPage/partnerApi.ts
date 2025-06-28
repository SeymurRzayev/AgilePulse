
import type { GetAllPartnersResponse, GetPartnerByIdResponse, PartnerItem } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

export const partnerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllPartners: build.query<GetAllPartnersResponse, void>({
            query: () => ({
                url: '/partners/all',
                method: 'GET',
            }),
        }),

        getPartnerById: build.query<GetPartnerByIdResponse, number>({
            query: (id) => ({
                url: `/partners/get/${id}`,
                method: 'GET',
            }),
        }),
        createPartner: build.mutation<PartnerItem, { data: PartnerItem }>({
            query: ({ data }) => ({
                url: '/partners/create',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});


export const { useGetAllPartnersQuery, useGetPartnerByIdQuery, useCreatePartnerMutation } = partnerApi;
