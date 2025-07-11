
import type { PodcastResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

const podcastapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodcast: builder.query<PodcastResponse, void>({
      query: () => ({
        url: "/podcasts/all",
        method: "GET",
      }),
    }),
    getPodcastById: builder.query<PodcastResponse, number>({
      query: (id) => ({
        url: `/podcasts/get/${id}`,
        method: "GET",
      }),
    }),
    deletePodcast: builder.mutation<void, number>({
      query: (id) => ({
        url: `/podcasts/${id}`,
        method: "DELETE",
      }),
    }),
    createPodcast: builder.mutation<void, FormData>({
      query: (data) => ({
        url: "/podcasts/create",
        method: "POST",
        body: data,
      }),
    }),
    updatePodcast: builder.mutation<void, { id: number; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/podcasts/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllPodcastQuery,useGetPodcastByIdQuery, useDeletePodcastMutation,useCreatePodcastMutation,useUpdatePodcastMutation } = podcastapi;
