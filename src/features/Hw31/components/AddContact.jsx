import { useState } from "react";
import { FormWrapper, Label, Input, AddButton } from "../Styles/AddContact";
export const AddContact = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setters = {
      name: () => setName(value),
      number: () => setNumber(value),
    };
    setters[name]();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/;
    const numberRegex =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!nameRegex.test(name)) {
      alert("Invalid name! Use only letters, apostrophes, dashes, and spaces.");
      return;
    }

    if (!numberRegex.test(number)) {
      alert(
        "Invalid phone number! It must contain digits and can include spaces, dashes, parentheses, and can start with +"
      );
      return;
    }

    onSubmit({
      id: Date.now().toString(),
      name: name,
      number: number,
    });

    setName("");
    setNumber("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          placeholder="Name"
          value={name}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          placeholder="Phone number"
          value={number}
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </FormWrapper>
  );
};
