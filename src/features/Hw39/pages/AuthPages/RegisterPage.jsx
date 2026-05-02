import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/authThunk";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { handleAuthSubmit } from "../../helpers/authSubmit";

import s from "./AuthPages.module.scss";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          handleAuthSubmit({
            values,
            dispatch,
            thunk: registerUser,
            navigate,
            setError,
            successPath: "/homeworks/hw39/contacts",
            errorMessage: "User already exists or password is shorter than 7",
          });
        }}
      >
        <Form className={s.form}>
          <Field className={s.input} name="name" placeholder="name" />
          <Field className={s.input} name="email" placeholder="email" />
          <Field className={s.input} name="password" type="password" />

          <button className={s.button} type="submit">
            Register
          </button>

          {error && <p className={s.error}>{error}</p>}
        </Form>
      </Formik>

      <p>Already have an account?</p>
      <Link className={s.link} to="/homeworks/hw39/login">
        Login
      </Link>
    </div>
  );
};
