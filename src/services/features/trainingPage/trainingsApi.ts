import type { Training } from "../../../types/types";
import { baseApi } from "../../api/baseApi";


const trainingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrainingsByCategory: build.query<Training[], number>({
      query: (categoryId) => ({
        url: `/trainings/category/${categoryId}`,
        method: "GET",
      }),
    }),
    getTrainingById: build.query<Training, number>({
      query: (trainingId) => ({
        url: `/trainings/${trainingId}`,
        method: "GET",
      }),
    }),
  }),
})


export const {
  useGetTrainingsByCategoryQuery,
  useGetTrainingByIdQuery,
} = trainingsApi
