import type { CertificateResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";



const certificateApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createCertificate: builder.mutation<CertificateResponse, FormData>({
            query: (formData) => ({
                url: `/certificate/upload`,
                method: 'POST',
                body: formData,
                formData: true,
            }),
            transformResponse: (response: { message: string; data: CertificateResponse }) => response.data,
        }),
        getCACertificates: builder.query<CertificateResponse[], number>({
            query: (userId) => ({
                url: `/certificate/user/${userId}`,
                method: 'GET',
            }),
            transformResponse: (response: { message: string; data: CertificateResponse[] }) => response.data,
        }),
    }),
})

export const { useCreateCertificateMutation, useGetCACertificatesQuery } = certificateApi;
