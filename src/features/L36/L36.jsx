import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchContacts, addContactAsync, deleteContactAsync } from "./redux/thunks/contactsThunk";
import { updateFilter } from "./redux/slices/filterSlice";
import { selectContacts, selectFilter, selectVisibleContacts } from "./redux/selectors/contactsSelectors";

import { AddContact } from "./components/AddContact";
import { ContactsList } from "./components/ContactsList";
import { Filter } from "./components/Filter";
import { Wrapper, SubWrapper } from "./Styles/Container";

export const L36 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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

  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <Wrapper>
      <SubWrapper>
        <AddContact onSubmit={onAddContact}></AddContact>
        <Filter value={filter} onChange={onUpdateFilter}></Filter>
      </SubWrapper>
      <ContactsList contacts={visibleContacts} onDeleteContact={onDeleteContact}></ContactsList>
    </Wrapper>
  );
};
