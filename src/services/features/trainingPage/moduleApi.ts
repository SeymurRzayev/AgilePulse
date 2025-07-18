import type { Module } from "../../../types/types";
import { baseApi } from "../../api/baseApi";



const moduleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getModuleByTrainingId: build.query<Module[], number>({
            query: (trainingId) => ({
                url: `/modules/${trainingId}`,
                method: "GET",
            }),
        }),
    })
})

export const {
    useGetModuleByTrainingIdQuery,

} = moduleApi;