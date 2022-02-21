import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { HOME } from "../../constants/routes";

const Navbar = (): ReactElement => (
  <div className={styles.container}>
    <ul>
      <li>
        <NavLink exact to={HOME} activeClassName={styles.activeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to={HOME} activeClassName={styles.activeLink}>
          Section 1
        </NavLink>
      </li>
      <li>
        <NavLink exact to={HOME} activeClassName={styles.activeLink}>
          Section 2
        </NavLink>
      </li>
      <li>
        <NavLink exact to={HOME} activeClassName={styles.activeLink}>
          Section 3
        </NavLink>
      </li>
      <li>
        <NavLink exact to={HOME} activeClassName={styles.activeLink}>
          Section 4
        </NavLink>
      </li>
      <li>
        <NavLink exact to={HOME} activeClassName={styles.activeLink}>
          Section 5
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
