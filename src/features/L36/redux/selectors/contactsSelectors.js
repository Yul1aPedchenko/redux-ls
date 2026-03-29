import { createSelector } from "reselect";

export const selectContacts = (state) => state.l36.contacts.contacts;
export const selectFilter = (state) => state.l36.filter;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
});
