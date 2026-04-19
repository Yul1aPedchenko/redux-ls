import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/authThunk";
import { useState } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginUser(form));
        }}
      >
        <input placeholder="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button>Login</button>
      </form>
    </>
  );
};
