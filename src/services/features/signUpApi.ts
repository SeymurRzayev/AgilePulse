import type { CreateUserReq } from "../../types/types";
import { baseApi } from "../api/baseApi";


const signUpApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation<void, CreateUserReq>({
            query: (data) => ({
                url: "/auth/request-otp",
                method: "POST",
                body: data,
            }),
        }),
    })
})


export const { useSignUpMutation } = signUpApi;