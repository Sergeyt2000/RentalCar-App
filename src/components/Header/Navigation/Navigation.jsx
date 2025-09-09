import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ""}`
        }
      >
        Catalog
      </NavLink>
    </nav>
  );
}
