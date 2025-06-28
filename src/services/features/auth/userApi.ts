import type { UpdateUserRequest } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        editUser: builder.mutation({
            query: ({ userId, data }: UpdateUserRequest) => ({
                url: `/user/update/${userId}?fullName=${data.fullName}&position=${data.position}&description=${data.description}&email=${data.email}`,
                method: "PUT",
            }),
        }),
        updatePhoto: builder.mutation({
            query: ({ id, data }: { id: number, data: FormData | null }) => ({
                url: `/user/upload-profile-image/${id}`,
                method: "POST",
                body: data,
                formData: true,
            }),
        })
    }),
});



export const { useEditUserMutation, useUpdatePhotoMutation } = userApi;