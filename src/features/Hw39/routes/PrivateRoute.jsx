import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.hw39.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/homeworks/hw39" />;
};