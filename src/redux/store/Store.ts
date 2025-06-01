import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../services/api/baseApi";
import authReducer from '../slices/authSlice'

export const Store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;