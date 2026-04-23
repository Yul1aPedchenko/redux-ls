import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/authThunk";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        dispatch(loginUser(values)).then(() => {
          navigate("/homeworks/hw39/contacts");
        });
      }}
    >
      <Form>
        <Field name="email" placeholder="email" />
        <Field name="password" type="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
