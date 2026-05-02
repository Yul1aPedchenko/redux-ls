import { useSelector } from "react-redux";
import { Menu } from "../../components/Menu/Menu";

import s from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  const user = useSelector((state) => state.hw39.auth.user);

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className={s.wrapper}>
      <Menu />

      <h2 className={s.title}>User Profile</h2>

      <div className={s.info}>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
