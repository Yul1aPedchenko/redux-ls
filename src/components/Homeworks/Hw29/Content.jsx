import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, updateFilter } from "./redux/actions";

import { AddContact } from "./components/AddContact";
import { ContactsList } from "./components/ContactsList";
import { Filter } from "./components/Filter";
import { Wrapper, SubWrapper } from "./Styles/Container";

export const Content = () => {
  const contacts = useSelector((store) => store.contacts);
  const filter = useSelector((store) => store.filter);
  const dispatch = useDispatch();

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
