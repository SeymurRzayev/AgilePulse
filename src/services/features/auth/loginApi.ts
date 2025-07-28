import Swal from "sweetalert2";
import { setLoggedUser } from "../../../redux/slices/authSlice";
import type { UserLoginReq, User } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

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
                    localStorage.setItem("accessToken", data.accessToken);
                    localStorage.setItem("refreshToken", data.refreshToken);
                    localStorage.setItem("user", JSON.stringify(data));
                    dispatch(setLoggedUser(data));
                } catch (err) {
                    Swal.fire("Xəta!", "İstifadəçi adı və ya şifrə yanlışdır", "error")
                    console.error("Login failed:", err);
                }
            }
        }),


    })

})

export const { useLoginMutation } = loginApi