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
            transformResponse: (res: QuizResponse) => res.content,
            providesTags: ['Quiz'],
        }),
        createQuiz: build.mutation<Quiz, QuizPostBody>({
            query: (body) => ({
                url: `/quizzes/create`,
                method: 'POST',
                body,
            }),
        }),
        getQuizByTrainingId: build.query<Quiz, number>({
            query: (trainingId) => ({
                url: `/quizzes/by-training/${trainingId}`,
                method: 'GET',
            }),
            providesTags: (_result, _error, trainingId) => [
                { type: 'Quiz', id: trainingId }
            ]
        }),
        getQuestionByQuizId: build.query<Question, { quizId: number, questionId: number }>({
            query: ({ questionId, quizId }) => ({
                url: `/quizzes/${quizId}/questions/${questionId}`,
                method: 'GET',
            }),
        }),
        updateQuestion: build.mutation<Question, { questionId: number, quizId: number, question: Question }>({
            query: ({ questionId, quizId, question }) => ({
                url: `/quizzes/${quizId}/questions/${questionId}`,
                method: 'PUT',
                body: question,
            }),
            invalidatesTags: (_result, _error, { quizId }) => [
                { type: 'Quiz', id: quizId }
            ],
        }),
        createQuestion: build.mutation<Question, { quizId: number, question: Question }>({
            query: ({ quizId, question }) => ({
                url: `/quizzes/${quizId}/questions`,
                method: 'POST',
                body: question,
            }),
            invalidatesTags: (_result, _error, { quizId }) => [
                { type: 'Quiz', id: quizId }
            ],
        }),
        disabledQuestion: build.mutation<Question, { questionId: number, quizId: number, isActive: boolean }>({
            query: ({ questionId, quizId, isActive }) => ({
                url: `/quizzes/${quizId}/questions/${questionId}/status?isActive=${isActive}`,
                method: 'PATCH',
            }),
            invalidatesTags: (_result, _error, { quizId }) => [
                { type: 'Quiz', id: quizId }
            ],
        }),
    }),
})

export const {
    useStartQuizMutation,
    useEndQuizMutation,
    useGetAllQuizQuery,
    useCreateQuizMutation,
    useGetQuizByTrainingIdQuery,
    useGetQuestionByQuizIdQuery,
    useUpdateQuestionMutation,
    useCreateQuestionMutation,
    useDisabledQuestionMutation,
} = quizApi;
