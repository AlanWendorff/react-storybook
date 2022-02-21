import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./Header.module.scss";
import { HOME } from "../../constants/routes";
import website_logo from "../../assets/images/header/website_logo.png";

const Header = (): ReactElement => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Link to={HOME}>
        <img src={website_logo} height="40" alt="website logo" />
      </Link>

      <div>
        <Navbar />
      </div>
    </div>
  </div>
);

export default Header;
