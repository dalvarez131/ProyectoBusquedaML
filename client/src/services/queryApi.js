import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const queryApi = createApi({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/api/items?q=:' }),
  endpoints: (builder) => ({
    getQueryByName: builder.query({
      query: (term) => term.searchQuery
    }),
  }),
})

export const { useGetQueryByNameQuery } = queryApi;