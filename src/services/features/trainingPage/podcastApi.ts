
import type { PodcastResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

const podcastapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodcast: builder.query<PodcastResponse, void>({
      query: () => ({
        url: "/podcasts/all",
        method: "GET",
      }),
      providesTags: ['Podcasts'],
    }),
    getPodcastById: builder.query<PodcastResponse, number>({
      query: (id) => ({
        url: `/podcasts/get/${id}`,
        method: "GET",
      }),
      providesTags: ['Podcasts'],
    }),
    deletePodcast: builder.mutation<void, number>({
      query: (id) => ({
        url: `/podcasts/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Podcasts'],
    }),
    createPodcast: builder.mutation<void, FormData>({
      query: (data) => ({
        url: "/podcasts/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Podcasts'],
    }),
    updatePodcast: builder.mutation<void, { id: number; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/podcasts/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ['Podcasts'],
    }),
  }),
});

export const { useGetAllPodcastQuery,useGetPodcastByIdQuery, useDeletePodcastMutation,useCreatePodcastMutation,useUpdatePodcastMutation } = podcastapi;
