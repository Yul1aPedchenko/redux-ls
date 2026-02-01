import { Outlet, NavLink } from "react-router-dom";

import s from "../Home.module.scss";

export const Lessons = () => {
  return (
    <>
      <div className={s.home__wrap}>
        <aside className={s.home__aside}>
          <ul>
            <li>
              <NavLink to="l29" className={({ isActive }) => (isActive ? `${s.home__item} ${s.active}` : s.home__item)}>
                29 - Знайомство з Redux, класичний Redux
              </NavLink>
            </li>
          </ul>
        </aside>
        <main className={s.home__content}>
          <Outlet />
        </main>
      </div>
    </>
  );
};
