import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchContacts, addContact, deleteContact } from "../../redux/contacts/contactsThunk";

import { Menu } from "../../components/Menu/Menu";

import s from "./ContactsPage.module.scss";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((s) => s.hw39.contacts.items) || [];

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!name || !number) return;

    const isDuplicate = contacts.some((c) => c.name.toLowerCase() === name.toLowerCase());

    if (isDuplicate) {
      alert("Контакт вже існує");
      return;
    }

    dispatch(addContact({ name, number }));

    setName("");
    setNumber("");
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <Menu />

      <form className={s.form} onSubmit={handleAdd}>
        <input className={s.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input className={s.input} value={number} onChange={(e) => setNumber(e.target.value)} placeholder="+380..." />
        <button className={s.button} type="submit">
          Add
        </button>
      </form>

      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <ul className={s.list}>
          {contacts.map((c) => (
            <li className={s.item} key={c.id}>
              {c.name} — {c.number}
              <button className={s.delete} onClick={() => handleDelete(c.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
