import { Message, Item, DeleteButton } from "../Styles/ContactsList";

export const ContactsList = ({ contacts, onDeleteContact }) => {
  if (!contacts.length) {
    return (
      <Message>
        <p>No contacts yet. Add your first contact</p>
      </Message>
    );
  }

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Item key={contact.id}>
            <div>
              <h3>{contact.name}</h3>
              <p>{contact.number}</p>
            </div>
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
          </Item>
        ))}
      </ul>
    </div>
  );
};
