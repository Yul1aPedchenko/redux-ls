import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authThunk";
import { useState } from "react";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(registerUser(form));
        }}
      >
        <input placeholder="name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
