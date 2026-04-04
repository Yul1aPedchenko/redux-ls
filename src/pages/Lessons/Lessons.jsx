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
            <li>
              <NavLink to="l31" className={({ isActive }) => (isActive ? `${s.home__item} ${s.active}` : s.home__item)}>
                31 - Todo list
              </NavLink>
              <NavLink to="l34" className={({ isActive }) => (isActive ? `${s.home__item} ${s.active}` : s.home__item)}>
                34 - Async Todo list
              </NavLink>
              <NavLink to="l36" className={({ isActive }) => (isActive ? `${s.home__item} ${s.active}` : s.home__item)}>
                36 - Селектори та бібліотека Reselect
              </NavLink>
              <NavLink to="l37" className={({ isActive }) => (isActive ? `${s.home__item} ${s.active}` : s.home__item)}>
                37 - Селектори та бібліотека Reselect 2
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
