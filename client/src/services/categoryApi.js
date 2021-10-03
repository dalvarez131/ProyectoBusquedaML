import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mercadolibre.com/' }),
  endpoints: (builder) => ({
    getCategoryById: builder.query({
      query: (id) => `categories/${id}`
    })
  })
})

export const { useLazyGetCategoryByIdQuery } = categoryApi;