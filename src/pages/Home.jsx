import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import s from './Home.module.scss';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <header className={s.home__header}>
          <nav className={s.home__nav}>
            <li>
              <button onClick={() => navigate("lessons")}>Lessons</button>
            </li>
            <li>
              <button onClick={() => navigate("homeworks")}>Homeworks</button>
            </li>
          </nav>
        </header>

        <Outlet />
      </div>
    </>
  );
};
