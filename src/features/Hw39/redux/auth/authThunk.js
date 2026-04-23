import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { contactsApi } from "../../../../api/ContactsApi";

const setAuthHeader = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  contactsApi.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    const res = await contactsApi.post("/users/signup", data);

    setAuthHeader(res.data.token);
    localStorage.setItem("token", res.data.token);

    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const loginUser = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const res = await contactsApi.post("/users/login", data);

    setAuthHeader(res.data.token);
    localStorage.setItem("token", res.data.token);

    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    clearAuthHeader();
    localStorage.removeItem("token");
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getCurrentUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const token = localStorage.getItem("token");

  if (!token) return thunkAPI.rejectWithValue("No token");

  try {
    setAuthHeader(token);
    const res = await contactsApi.get("/users/current");
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
