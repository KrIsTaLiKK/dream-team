import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   clearAuth(state) {
  //     state.user = { name: null, email: null };
  //     state.token = null;
  //     state.isLoggedIn = false;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(authApi.endpoints.refreshUser.matchPending, (state) => {
        state.isRefreshing = true;
      })
      .addMatcher(
        authApi.endpoints.refreshUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
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
  whitelist: ["token"],
};

export const authReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const { clearAuth } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
