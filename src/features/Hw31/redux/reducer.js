import { createReducer, combineReducers } from "@reduxjs/toolkit";

import { addContact, deleteContact, updateFilter } from "./actions";

const contactsInitialState = [];
const contactsReducer = createReducer(contactsInitialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      const isInContacts = state.find((contact) => {
        return contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim() || contact.number.trim() === action.payload.number.trim();
      });

      if (!isInContacts) {
        state.push(action.payload);
      } else {
        alert(`${action.payload.name} or ${action.payload.number} is already in your contacts`);
      }
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    });
});

const filterInitialState = "";
const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(updateFilter, (state, action) => {
    return action.payload
  });
});

export const hw31Reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
