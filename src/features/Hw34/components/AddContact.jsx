import { useState } from "react";
import { FormWrapper, Label, Input, AddButton } from "../Styles/AddContact";

export const AddContact = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      let cleaned = value.replace(/[^+\d\s\-()]/g, "");

      if (cleaned.includes("+") && cleaned.indexOf("+") !== 0) {
        return;
      }

      if (!cleaned.startsWith("+")) {
        cleaned = "+" + cleaned.replace(/\+/g, "");
      }
      setNumber(cleaned);
      return;
    }

    if (name === "name") {
      setName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
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
        <Input type="text" name="name" title="Name may contain only letters, apostrophe, dash and spaces" onChange={handleChange} placeholder="Name" value={name} required />
      </Label>

      <Label>
        Number
        <Input type="tel" name="number" pattern="^\+[0-9\s\-()]+$" title="Phone number must start with + and contain only digits, spaces, dashes or parentheses" onChange={handleChange} placeholder="+380..." value={number} required />
      </Label>

      <AddButton type="submit">Add contact</AddButton>
    </FormWrapper>
  );
};
