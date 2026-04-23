import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, getCurrentUser, logoutUser } from "./authThunk";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (s, a) => {
        s.user = a.payload.user;
        s.token = a.payload.token;
        s.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (s, a) => {
        s.user = a.payload.user;
        s.token = a.payload.token;
        s.isLoggedIn = true;
      })
      .addCase(getCurrentUser.pending, (s) => {
        s.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (s, a) => {
        s.user = a.payload;
        s.isLoggedIn = true;
        s.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, (s) => {
        s.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, (s) => {
        s.user = null;
        s.token = null;
        s.isLoggedIn = false;
      });
  },
});

export const authReducer = slice.reducer;
