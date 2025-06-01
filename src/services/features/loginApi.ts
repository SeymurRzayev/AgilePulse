import { setLoggedUser } from "../../redux/slices/authSlice";
import type { UserLoginReq, User } from "../../types/types";
import { baseApi } from "../api/baseApi";

export const loginApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<User, UserLoginReq>({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem("token", data.refreshToken);
                    localStorage.setItem("user", JSON.stringify(data));
                    dispatch(setLoggedUser(data))
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