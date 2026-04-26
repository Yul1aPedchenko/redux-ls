import { useSelector } from "react-redux";
import { Menu } from "../components/Menu/Menu";

export const ProfilePage = () => {
  const user = useSelector((state) => state.hw39.auth.user);

  if (!user) {
    return <p>Loading profile...</p>
  }

  return (
    <div>
      <Menu />

      <h2>User Profile</h2>

      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};
