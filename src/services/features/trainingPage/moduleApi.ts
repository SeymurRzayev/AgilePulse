import type { Module, ModuleRequest } from "../../../types/types";
import { baseApi } from "../../api/baseApi";



const moduleApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getModuleByTrainingId: build.query<Module[], number>({
            query: (trainingId) => ({
                url: `/modules/${trainingId}`,
                method: "GET",
            }),
        }),
        createModule: build.mutation<Module, ModuleRequest>({
            query: (module) => ({
                url: `/modules/create`,
                method: "POST",
                body: module,
            }),
        }),
        updateModule: build.mutation<Module, { module: ModuleRequest, moduleId: number }>({
            query: ({ module, moduleId }) => ({
                url: `/modules/${moduleId}`,
                method: "PUT",
                body: module,
            }),
        }),
    })
})

export const {
    useGetModuleByTrainingIdQuery,
    useCreateModuleMutation,
    useUpdateModuleMutation,
} = moduleApi;