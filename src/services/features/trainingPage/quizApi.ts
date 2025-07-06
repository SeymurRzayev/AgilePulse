import type { AnswerSubmissionRequest, QuizApiResponse, QuizSessionResponse } from "../../../types/types";
import { baseApi } from "../../api/baseApi";



const quizApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        startQuiz: build.mutation<QuizApiResponse, { userId: number, quizId: number }>({
            query: ({ userId, quizId }) => ({
                url: `/quizes/start?userId=${userId}&quizId=${quizId}`,
                method: 'POST',
            }),
        }),
        endQuiz: build.mutation<QuizSessionResponse, AnswerSubmissionRequest>({
            query: (body) => ({
                url: `/quizes/complete/${body.sessionId}`,
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {
    useStartQuizMutation,
    useEndQuizMutation,
} = quizApi;