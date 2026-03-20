import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_TODOS_API;
axios.defaults.baseURL = BASE_URL;

export const fetchContacts = createAsyncThunk("hw34/fetchContacts", async (_, thunkAPI) => {
  try {
    const r = await axios.get("/contacts");
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContactAsync = createAsyncThunk("hw34/addContact", async (newContact, thunkAPI) => {
  try {
    const r = await axios.post("/contacts", newContact);
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContactAsync = createAsyncThunk("hw34/deleteContact", async (id, thunkAPI) => {
  try {
    const r = await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
