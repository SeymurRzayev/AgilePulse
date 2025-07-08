import type { Training } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

interface SavedTrainingRequst {
    userId: number;
    trainingId: number;
}
interface SavedTrainingResponse {
    userId: number;
    trainingId: number;
    saved: boolean;
}


const savedTrainingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addSavedTrainings: builder.mutation<SavedTrainingResponse, SavedTrainingRequst>({
            query: (body) => ({
                url: '/saved-trainings/toggle',
                method: 'POST',
                body,
            }),
        }),
        getAllSavedTrainingsOfUser: builder.query<Training[], number>({
            query: (userId) => ({
                url: `/saved-trainings/user/${userId}`,
                method: 'GET',
            }),
        }),
        isSaved: builder.query<boolean, SavedTrainingRequst>({
            query: (body) => ({
                url: `/saved-trainings/check?userId=${body.userId}&trainingId=${body.trainingId}`,
                method: 'GET',
            }),
        }),
    }),
})

export const { useAddSavedTrainingsMutation, useGetAllSavedTrainingsOfUserQuery, useIsSavedQuery } = savedTrainingsApi;
