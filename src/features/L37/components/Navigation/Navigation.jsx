import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const BASE_PATH = "/lessons/l37";

export default function Navigation() {
  const links = [
    { label: "Головна", to: "", end: true },
    { label: "Автори", to: "authors" },
    { label: "Книги", to: "books" },
  ];

  return (
    <nav>
      {links.map(({ label, to, end }) => (
        <NavLink
          key={to}
          to={`${BASE_PATH}/${to}`}
          end={end}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
