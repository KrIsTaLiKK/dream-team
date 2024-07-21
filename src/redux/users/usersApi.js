import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://reqres.in/api";

export const usersApi = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: (page = 1) => `users?page=${page}&per_page=8`,
      providesTags: () => [
        {
          type: "Users",
        },
      ],
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
