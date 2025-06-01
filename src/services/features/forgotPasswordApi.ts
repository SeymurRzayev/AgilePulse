import { baseApi } from "../api/baseApi";


const forgotPassword = baseApi.injectEndpoints({
    endpoints: (build) => ({
        forgotPassword: build.mutation<void, string>({
            query: (email) => ({
                url: `/auth/send-reset-password-link?email=${email}`,
                method: "POST",
            }),
        }),
        resetPassword: build.mutation<void, { password: string, token: string }>({
            query: ({ password, token }) => ({
                url: `/auth/reset-password?token=${token}&newPassword=${password}`,
                method: "POST",
            }),
        }),
    }),
});

export const { useForgotPasswordMutation, useResetPasswordMutation } = forgotPassword;