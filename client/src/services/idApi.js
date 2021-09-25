import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const idApi = createApi({
  reducerPath: 'idApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mercadolibre.com/' }),
  endpoints: (builder) => ({
    getQueryById: builder.query({
      query: (id) => `items/${id}`
    }),
    getDescById: builder.query({
      query: (id) => `items/${id}/description`
    }),
  })
})

export const { useGetQueryByIdQuery, useGetDescByIdQuery } = idApi;