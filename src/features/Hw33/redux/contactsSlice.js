import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const isInContacts = state.find((contact) => {
        return contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim() || contact.number.trim() === action.payload.number.trim();
      });

      if (!isInContacts) {
        state.push(action.payload);
      } else {
        alert(`${action.payload.name} or ${action.payload.number} is already in your contacts`);
      }
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
