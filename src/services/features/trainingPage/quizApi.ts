import type { AnswerSubmissionRequest, Question, Quiz, QuizApiResponse, QuizPostBody, QuizResponse, QuizSessionResponse } from "../../../types/types";
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
        getAllQuiz: build.query<Quiz[], void>({
            query: () => ({
                url: `/quizzes/findAllQuiz`,
                method: 'GET',
            }),
            transformResponse:(res : QuizResponse)=> res.content,
        }),
        createQuiz: build.mutation<Quiz, QuizPostBody>({
            query: (body) => ({
                url: `/quizzes/create`,
                method: 'POST',
                body,
            }),
        }),
        getQuizByTrainingId: build.query<Question[],number>({
            query: (trainingId) => ({
                url: `/quizzes/by-training/${trainingId}/questions`,
                method: 'GET',
            }),
        })
    }),
})

export const {
    useStartQuizMutation,
    useEndQuizMutation,
    useGetAllQuizQuery,
    useCreateQuizMutation,
    useGetQuizByTrainingIdQuery
} = quizApi;