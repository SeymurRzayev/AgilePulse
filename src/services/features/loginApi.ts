import type { UserLoginReq, UserLoginRes } from "../../types/types";
import { baseApi } from "../api/baseApi";

export const loginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserLoginRes, UserLoginReq>({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    if (data?.accessToken) {
                        window.location.href = '/'
                    }

                } catch (err) {
                    console.error("Login failed:", err);
                }
            }
        }),


    })

})

export const { useLoginMutation } = loginApi