import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../../../api/ContactsApi";

export const fetchContacts = createAsyncThunk("contacts/fetch", async (_, thunkAPI) => {
  try {
    const res = await contactsApi.get("/contacts");
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk("contacts/add", async (data, thunkAPI) => {
  try {
    const res = await contactsApi.post("/contacts", data);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/delete", async (id, thunkAPI) => {
  try {
    await contactsApi.delete(`/contacts/${id}`);
    return id;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
