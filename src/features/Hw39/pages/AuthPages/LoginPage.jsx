import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authThunk";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { handleAuthSubmit } from "../../helpers/authSubmit";

import s from "./AuthPages.module.scss";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleAuthSubmit({
            values,
            dispatch,
            thunk: loginUser,
            navigate,
            setError,
            successPath: "/homeworks/hw39/contacts",
            errorMessage: "Incorrect email or password",
          });
        }}
      >
        <Form className={s.form}>
          <Field className={s.input} name="email" placeholder="email" />
          <Field className={s.input} name="password" type="password" />

          <button className={s.button} type="submit">
            Login
          </button>

          {error && <p className={s.error}>{error}</p>}
        </Form>
      </Formik>

      <p>Don't have an account?</p>
      <Link className={s.link} to="/homeworks/hw39/register">
        Register
      </Link>
    </div>
  );
};
