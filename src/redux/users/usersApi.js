import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: (page = 1) => `users?page=${page}&per_page=8`,
      transformResponse: (response) => ({
        users: response.data,
        totalPages: response.total_pages,
      }),
    }),

    fetchUserById: builder.query({
      query: (id) => `users/${id}`,
      transformResponse: (response) => ({
        data: response.data,
      }),
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery } = usersApi;
