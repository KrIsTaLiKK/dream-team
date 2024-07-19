import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  items: [],
  likedUsers: [],
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
    toggleLikedUsers(state, action) {
      const isLiked = state.likedUsers.some(
        (user) => user.id === action.payload
      );

      if (isLiked) {
        const updatedLikedUsers = state.likedUsers.filter(
          (user) => user.id !== action.payload
        );

        state.likedUsers = updatedLikedUsers;
      } else {
        const likedUser = state.items.find(
          (user) => user.id === action.payload
        );
        state.likedUsers.push(likedUser);
      }
    },
  },
});

const likedUsersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["likedUsers"],
};

export const usersReducer = persistReducer(
  likedUsersPersistConfig,
  usersSlice.reducer
);

export const { incrementPage, addUsers, toggleLikedUsers } = usersSlice.actions;
