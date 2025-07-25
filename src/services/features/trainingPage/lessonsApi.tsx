import type { Lesson } from "../../../types/types";
import { baseApi } from "../../api/baseApi";



const lessonsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        updateLesson: build.mutation<void, { lessonId: number, body: Lesson }>({
            query: ({ lessonId, body }) => ({
                url: `/lessons/${lessonId}`,
                method: "PUT",
                body,
            }),
        }),
        createLesson: build.mutation<void, Lesson>({
            query: (body) => ({
                url: `/lessons/create`,
                method: "POST",
                body,
            }),
        }),
        deleteLesson: build.mutation<void, number>({
            query: (lessonId) => ({
                url: `/lessons/${lessonId}`,
                method: "DELETE",
            }),
        }),
    }),
})

export const { useUpdateLessonMutation, useCreateLessonMutation, useDeleteLessonMutation } = lessonsApi;