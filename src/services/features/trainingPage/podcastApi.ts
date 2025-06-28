import type { PodcastResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const podcastapi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllPodcast: builder.query<PodcastResponse, void>({
            query: () => ({
                url: '/podcasts/all',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetAllPodcastQuery } = podcastapi
