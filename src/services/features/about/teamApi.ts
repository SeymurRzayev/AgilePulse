import type { GetAllTeamResponse, TeamMember } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

const teamApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTeam: builder.query<GetAllTeamResponse, void>({
            query: () => ({
                url: "/team/all",
                method: "GET",
            }),
        }),
        getTeamMemberById: builder.query<TeamMember, number>({
            query: (id) => ({
                url: `/team/get/${id}`,
                method: "GET",
            }),
        }),
        createTeamMemeber: builder.mutation<TeamMember, FormData>({
            query: (data) => ({
                url: "/team/create",
                method: "POST",
                body: data,
            }),
        }),
        updateEmployee: builder.mutation<void, { id: number; data: FormData }>({
            query: ({ id, data }) => ({
                url: `/team/update/${id}`,
                method: "PUT",
                body: data,
            }),
        }),
        deleteEmployee: builder.mutation<void, number>({
            query: (id) => ({
                url: `/team/delete/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAllTeamQuery,
    useGetTeamMemberByIdQuery,
    useCreateTeamMemeberMutation,
    useDeleteEmployeeMutation,
    useUpdateEmployeeMutation,
} = teamApi;