import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/authThunk";
import { buttonsData } from "./helper";
import { useNavigate } from "react-router-dom";
import s from "./Menu.module.scss";

export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((s) => s.hw39.auth.user?.email);

  return (
    <div className={s.wrapper}>
      {buttonsData.map((button) => (
        <button className={s.button} key={button.label} onClick={() => navigate(button.path)}>
          {button.label}
        </button>
      ))}

      <button
        className={`${s.button} ${s.logout}`}
        onClick={() => {
          dispatch(logoutUser());
          navigate("/homeworks/hw39");
        }}
      >
        Logout
      </button>
    </div>
  );
};
