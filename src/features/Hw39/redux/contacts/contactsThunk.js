import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../../../api/ContactsApi";

export const fetchContacts = createAsyncThunk("hw39/fetchContacts", async (_, thunkAPI) => {
  try {
    const r = await contactsApi.get("/contacts");
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContactAsync = createAsyncThunk("hw39/addContact", async (newContact, thunkAPI) => {
  try {
    const r = await contactsApi.post("/contacts", newContact);
    return r.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContactAsync = createAsyncThunk("hw39/deleteContact", async (id, thunkAPI) => {
  try {
    const r = await contactsApi.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
