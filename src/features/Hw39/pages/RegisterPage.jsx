import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authThunk";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { handleAuthSubmit } from "../helpers/authSubmit";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        // onSubmit={async (values) => {
        //   setError("");

        //   try {
        //     await dispatch(registerUser(values)).unwrap();
        //     navigate("/homeworks/hw39/contacts");
        //   } catch (e) {
        //     setError(e || "Something went wrong");
        //   }
        // }}
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
        <Form>
          <Field name="name" placeholder="name" />
          <Field name="email" placeholder="email" />
          <Field name="password" type="password" />
          <button type="submit">Register</button>

          {error && <p>{error}</p>}
        </Form>
      </Formik>

      <p>Already have an account?</p>
      <Link to="/homeworks/hw39/login">Login</Link>
    </>
  );
};
