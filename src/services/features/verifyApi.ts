import { baseApi } from "../api/baseApi";


type VerifyResponse = {
    email: string;
    otp: string;
}

const verifyApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        verify: builder.mutation<void, VerifyResponse>({
            query: ({ email, otp }: VerifyResponse) => ({
                url: `/auth/verify-otp?email=${email}&otp=${otp}`,
                method: 'POST',
            }),
        }),
    })
})


export const { useVerifyMutation } = verifyApi;