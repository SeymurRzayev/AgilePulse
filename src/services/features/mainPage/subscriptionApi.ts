import type { GetAllSubscriptionsResponse, GetSubscriptionByIdResponse, SubscriptionRes } from "../../../types/types";
import { baseApi } from "../../api/baseApi";

export const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllSubscriptions: build.query<GetAllSubscriptionsResponse, void>({
            query: () => ({
                url: '/subscriptions/all',
                method: 'GET'
            })
        }),
        getSubScriptionById: build.query<GetSubscriptionByIdResponse, number>({
            query: (id) => ({
                url: `/subscriptions/get/${id}`,
                method: 'GET'
            })
        }),
        createSubscription: build.mutation<SubscriptionRes, string>({
            query: (body) => ({
                url: `/subscriptions/create?email=${body}`,
                method: 'POST'
            })
        })
    })
})

export const { useGetAllSubscriptionsQuery, useGetSubScriptionByIdQuery, useCreateSubscriptionMutation } = subscriptionApi