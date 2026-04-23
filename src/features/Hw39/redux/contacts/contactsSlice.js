import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsThunk";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (s, a) => {
        s.items = a.payload;
      })
      .addCase(addContact.fulfilled, (s, a) => {
        s.items.push(a.payload);
      })
      .addCase(deleteContact.fulfilled, (s, a) => {
        s.items = s.items.filter((c) => c.id !== a.payload);
      });
  },
});

export const contactsReducer = slice.reducer;
