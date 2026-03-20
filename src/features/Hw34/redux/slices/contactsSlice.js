import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContactAsync, deleteContactAsync } from "../thunks/contactsThunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    isLoading: false,
    contacts: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })

      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
