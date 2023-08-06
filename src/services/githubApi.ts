import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (username) => ({
        url: `users/${username}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserMutation } = githubApi;