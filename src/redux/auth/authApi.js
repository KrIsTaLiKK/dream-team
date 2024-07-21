import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://reqres.in/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logIn: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    refreshUser: builder.query({
      queryFn: (_, { getState }) => {
        const state = getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
          return { error: "Unable to fetch user" };
        }

        return {
          data: {
            user: { id: 4 },
            token: persistedToken,
          },
        };
      },
    }),
    updateAvatar: builder.mutation({
      query: ({ userId, formData }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useRefreshUserQuery,
  useUpdateAvatarMutation,
} = authApi;
