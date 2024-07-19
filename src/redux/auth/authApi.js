import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
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
            user: { name: "Eve Holt", email: "eve.holt@reqres.in" },
            token: persistedToken,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useRefreshUserQuery,
} = authApi;
