import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post("/register", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      const errorData = {
        message: error.message,
        status: error.response ? error.response.status : null,
      };
      return thunkAPI.rejectWithValue(errorData);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const resp = await axios.post("/login", credentials);
      setAuthHeader(resp.data.token);
      return resp.data;
    } catch (error) {
      const errorData = {
        message: error.message,
        status: error.response ? error.response.status : null,
      };
      return thunkAPI.rejectWithValue(errorData);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/logout");
    removeAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    setAuthHeader(persistedToken);

    return {
      user: { name: "Eve Holt", email: "eve.holt@reqres.in" },
      token: persistedToken,
    };
  }
);
