import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authThunk";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        dispatch(registerUser(values)).then(() => {
          navigate("/homeworks/hw39/contacts");
        });
      }}
    >
      <Form>
        <Field name="name" placeholder="name" />
        <Field name="email" placeholder="email" />
        <Field name="password" type="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
