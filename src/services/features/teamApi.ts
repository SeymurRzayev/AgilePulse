
import type { GetAllTeamResponse, TeamMember } from "../../types/types";
import { baseApi } from "../api/baseApi";

const teamApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTeam: builder.query<GetAllTeamResponse, void>({
            query: () => ({
                url: "/team/all",
                method: "GET"
            })
        }),
        getTeamMemberById: builder.query<TeamMember, number>({
            query: (id) => ({
                url: `/team/get/${id}`,
                method: "GET"
            })
        }),
        createTeamMemeber: builder.mutation<TeamMember, TeamMember>({
            query: (data) => (
                {
                    url: "/team/create",
                    method: "POST",
                    body: data
                }
            )
        })
    })
})


export const { useGetAllTeamQuery, useGetTeamMemberByIdQuery, useCreateTeamMemeberMutation } = teamApi

