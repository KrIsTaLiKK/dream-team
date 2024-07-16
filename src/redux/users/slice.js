import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
  favoriteUsers: [],
  currentPage: 1,
  totalPages: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage++;
    },
    addUsers: (state, action) => {
      const newUsers = action.payload.users;
      const existingUserIds = new Set(state.items.map((user) => user.id));
      const filteredUsers = newUsers.filter(
        (user) => !existingUserIds.has(user.id)
      );

      state.items = [...state.items, ...filteredUsers];
      state.totalPages = action.payload.totalPages;
    },
    toggleFavoriteUsers(state, action) {
      const isInFavorites = state.favoriteUsers.some(
        (user) => user.id === action.payload
      );

      if (isInFavorites) {
        const updatedFavorites = state.favoriteUsers.filter(
          (user) => user.id !== action.payload
        );

        state.favoriteUsers = updatedFavorites;
      } else {
        const favoriteUser = state.items.find(
          (user) => user.id === action.payload
        );
        state.favoriteUsers.push(favoriteUser);
      }
    },
  },
});

const favoriteUsersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["favoriteUsers"],
};

export const usersReducer = persistReducer(
  favoriteUsersPersistConfig,
  usersSlice.reducer
);

export const { incrementPage, addUsers, toggleFavoriteUsers } =
  usersSlice.actions;
