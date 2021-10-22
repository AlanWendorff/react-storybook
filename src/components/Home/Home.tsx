import { Fragment, ReactElement } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import { ABOUT, APP_AUTHOR, APP_NAME } from "../../constants";

const Home = (): ReactElement => (
  <Fragment>
    <h1 className={styles.title}>{APP_NAME}</h1>
    <p className={styles.paragraph}>{`By ${APP_AUTHOR}`}</p>
    <Link to={ABOUT} data-testid="about-link">
      About
    </Link>
    <p>This is a template App for frontend react apps.</p>
  </Fragment>
);

export default Home;
