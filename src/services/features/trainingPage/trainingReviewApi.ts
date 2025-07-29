import type { TrainingReview } from "../../../types/types";
import { baseApi } from "../../api/baseApi";



const trainingReviewApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTrainingReview: builder.mutation<void, { userId: number; data: TrainingReview }>({
            query: ({ userId, data }) => ({
                url: `/training-reviews&userId=${userId}`,
                method: "POST",
                body: data,
            }),
        }),
    }),
})


export const { useCreateTrainingReviewMutation } = trainingReviewApi