import { NavLink } from "react-router-dom";
import css from "./logo.module.css";

export default function Logo() {
  return (
    <div>
      <NavLink to="/">
        <svg className={css.logoIcon}>
          <use href="/sprite.svg#icon-logo" />
        </svg>
      </NavLink>
    </div>
  );
}
