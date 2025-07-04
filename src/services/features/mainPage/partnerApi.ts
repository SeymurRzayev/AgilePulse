
import type { GetAllPartnersResponse, GetPartnerByIdResponse, PartnerItem } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

export const partnerApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllPartners: build.query<PartnerItem[], void>({
            query: () => ({
                url: '/partners/all',
                method: 'GET',
            }),
            transformResponse: (response: GetAllPartnersResponse) => response?.data?.data,
            providesTags: ['Partner'],
        }),
        getPartnerById: build.query<GetPartnerByIdResponse, number>({
            query: (id) => ({
                url: `/partners/get/${id}`,
                method: 'GET',
            }),
        }),
        createPartner: build.mutation<PartnerItem, FormData>({
            query: (body) => ({
                url: '/partners/create',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Partner'],
        }),
        deletePartner: build.mutation<void, number>({
            query: (id) => ({
                url: `/partners/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Partner'],
        }),
        updatePartner: build.mutation<void, { id: number, body: FormData }>({
            query: ({ id, body }) => ({
                url: `/partners/update/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Partner'],
        }),
    }),
});

export const { useGetAllPartnersQuery,
    useGetPartnerByIdQuery,
    useCreatePartnerMutation,
    useDeletePartnerMutation,
    useUpdatePartnerMutation,
} = partnerApi;
