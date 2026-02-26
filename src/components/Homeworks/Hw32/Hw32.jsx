import { useDispatch, useSelector } from "react-redux";

import { addContact, deleteContact } from "../../../redux/hw32/contactsSlice";
import { updateFilter } from "../../../redux/hw32/filterSlice";

import { AddContact } from "./components/AddContact";
import { ContactsList } from "./components/ContactsList";
import { Filter } from "./components/Filter";
import { Wrapper, SubWrapper } from "./Styles/Container";

export const Hw32 = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((store) => store.hw32.contacts);
  const filter = useSelector((store) => store.hw32.filter);

  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
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
