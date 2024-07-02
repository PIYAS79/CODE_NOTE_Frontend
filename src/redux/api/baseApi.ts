import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
        method: "GET",
      }),
      providesTags: ['users'],
    })
  })
})


export const {} = baseApi;
