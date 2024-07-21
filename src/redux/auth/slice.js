import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {
  user: { id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.user = { id: payload.id };
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          state.user = { id: 4 };
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state) => {
        state.user = { id: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(authApi.endpoints.refreshUser.matchPending, (state) => {
        state.isRefreshing = true;
      })
      .addMatcher(
        authApi.endpoints.refreshUser.matchFulfilled,
        (state, { payload }) => {
          state.user = { id: payload.user.id };
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(authApi.endpoints.refreshUser.matchRejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
