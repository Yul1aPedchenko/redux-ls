import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/authThunk";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { handleAuthSubmit } from "../helpers/authSubmit";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  return (
    <>
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
        <Form>
          <Field name="email" placeholder="email" />
          <Field name="password" type="password" />
          <button type="submit">Login</button>

          {error && <p>{error}</p>}
        </Form>
      </Formik>

      <p>Don't have an account?</p>
      <Link to="/homeworks/hw39/register">Register</Link>
    </>
  );
};
