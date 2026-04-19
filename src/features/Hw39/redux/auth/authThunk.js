import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { contactsApi } from "../../../../api/ContactsApi";

const setAuthHeader = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  contactsApi.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk("hw39/authRegister", async (data, thunkAPI) => {
  try {
    console.log(data);
    const r = await contactsApi.post("/users/signup", data);
    setAuthHeader(r.data.token);
    console.log("registered");
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk("hw39/authLogin", async (data, thunkAPI) => {
  try {
    const r = await contactsApi.post("/users/login", data);
    setAuthHeader(r.data.token);
    console.log("logged");
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
