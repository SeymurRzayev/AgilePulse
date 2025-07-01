import type { Trainer, TrainerResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";





const trainerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrainers: builder.query<Trainer[], void>({
            query: () => ({
                url: "/trainer/all",
                method: "GET",
            }),
            transformResponse: (response: TrainerResponse) => response.data.data,
        }),
    }),
})


export const { useGetTrainersQuery } = trainerApi