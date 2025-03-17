import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/weather' }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (location) => `current?location=${location}`,
            keepUnusedDataFor: 300, // 5-minute cache
        }),
    }),
});