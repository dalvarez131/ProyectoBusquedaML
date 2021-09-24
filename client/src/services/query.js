import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const queryApi = createApi({
  reducerPath: 'queryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mercadolibre.com/sites/MLA/search?q=​:' }),
  endpoints: (builder) => ({
    getQueryByName: builder.query({
      query: (term) => term.searchQuery
    }),
  }),
})

export const { useGetQueryByNameQuery } = queryApi;