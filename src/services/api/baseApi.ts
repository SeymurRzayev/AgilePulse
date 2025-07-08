import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchArgs } from '@reduxjs/toolkit/query/react';
import { base_url } from '../../config/adminApi';

const baseQuery = fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, unknown> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error && result.error.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            redirectToLogin();
            return result;
        }

        const refreshResult = await baseQuery(
            {
                url: '/auth/refresh-token',
                method: 'POST',
                body: { refreshToken },
            },
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            const newAccessToken = (refreshResult.data as any).accessToken;
            localStorage.setItem('accessToken', newAccessToken);

            const retryResult = await baseQuery(args, api, extraOptions);
            return retryResult;
        } else {
            redirectToLogin();
            return refreshResult;
        }
    }

    return result;
};

function redirectToLogin() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
}

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Book', 'Partner'],
    endpoints: () => ({}),
});
