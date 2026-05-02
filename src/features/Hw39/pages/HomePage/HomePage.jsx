import { Link } from "react-router-dom";
import s from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Welcome to Contacts App</h1>

      <div className={s.buttons}>
        <Link to="login">
          <button className={s.button}>Login</button>
        </Link>

        <Link to="register">
          <button className={s.button}>Register</button>
        </Link>
      </div>
    </div>
  );
};
