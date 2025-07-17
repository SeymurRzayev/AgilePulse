import {
    createApi,
    fetchBaseQuery,
    type BaseQueryFn,
    type FetchArgs,
    type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { base_url } from '../../config/adminApi';
import Swal from 'sweetalert2';

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

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            await redirectToLogin();
            return { error: { status: 401, data: 'Unauthorized' } };
        }

        const refreshResult = await baseQuery(
            {
                url: `${base_url}/auth/refresh-token`,
                method: 'POST',
                body: { refreshToken },
            },
            api,
            extraOptions
        );

        console.log(refreshResult);

        if (refreshResult?.data && !(refreshResult as any).error) {
            const newAccessToken = (refreshResult.data as any).accessToken;
            localStorage.setItem('accessToken', newAccessToken);

            // Retry original request with updated token
            const modifiedArgs =
                typeof args === 'string'
                    ? { url: args }
                    : {
                        ...args,
                        headers: {
                            ...(args as FetchArgs).headers,
                            Authorization: `Bearer ${newAccessToken}`,
                        },
                    };

            return await baseQuery(modifiedArgs, api, extraOptions);
        } else {
            await redirectToLogin();
            return { error: { status: 401, data: 'Session expired' } };
        }
    }

    return result;
};

async function redirectToLogin() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    await Swal.fire({
        icon: 'warning',
        title: 'Sessiyanızın müddəti doldu!',
        text: 'Giriş səhifəsinə yönləndirilirsiniz. Davam etmək üçün Tamam\'a klik edin.',
        confirmButtonText: 'Tamam',
    }).then(() => {
        window.location.href = '/sign-in';
    });
}

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: [
        'Book',
        'Partner',
        'Categories',
        'isSaved',
        'Quote',
        'Podcasts',
    ],
    endpoints: () => ({}),
});