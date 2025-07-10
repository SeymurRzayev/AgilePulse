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
    updateTrainer: builder.mutation<void, { id: number; data: FormData }>({
      query: ({ id, data }) => ({
        url: `/trainer/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteTrainer: builder.mutation<void, number>({
      query: (id) => ({
        url: `/trainer/delete/${id}`,
        method: "DELETE",
      }),
    }),
    createTrainer: builder.mutation<void, FormData>({
      query: (trainer) => ({
        url: "/trainer/create",
        method: "POST",
        body: trainer,
      }),
    }),
  }),
});

export const {
  useGetTrainersQuery,
  useDeleteTrainerMutation,
  useUpdateTrainerMutation,
  useCreateTrainerMutation
} = trainerApi;
