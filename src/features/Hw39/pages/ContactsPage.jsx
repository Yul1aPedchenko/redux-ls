import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts, addContactAsync, deleteContactAsync } from "../redux/contacts/contactsThunk";
import { updateFilter } from "../redux/filter/filterSlice";

import { AddContact } from "../components/AddContact";
import { ContactsList } from "../components/ContactsList";
import { Filter } from "../components/Filter";
import { Wrapper, SubWrapper } from "../Styles/Container";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector((store) => store.hw39.contacts.contacts);
  const filter = useSelector((store) => store.hw39.filter);

  const onAddContact = (newContact) => {
  const isDuplicate = contacts.some(
    (contact) =>
      contact.name.toLowerCase().trim() ===
      newContact.name.toLowerCase().trim()
  );

  if (isDuplicate) {
    alert("Такий контакт вже існує!");
    return;
  }

  dispatch(addContactAsync(newContact));
};

  const onDeleteContact = (id) => {
    dispatch(deleteContactAsync(id));
  };

  const onUpdateFilter = (value) => {
    dispatch(updateFilter(value));
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));
  };
  return (
    <Wrapper>
      <SubWrapper>
        <AddContact onSubmit={onAddContact}></AddContact>
        <Filter value={filter} onChange={onUpdateFilter}></Filter>
      </SubWrapper>
      <ContactsList contacts={getVisibleContacts()} onDeleteContact={onDeleteContact}></ContactsList>
    </Wrapper>
  );
};