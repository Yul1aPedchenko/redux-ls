import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/auth/authThunk";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((s) => s.hw39.auth.user?.email);

  return (
    <div>
      <p>{email}</p>
      <button
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
