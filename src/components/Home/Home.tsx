import { Fragment, ReactElement } from "react";

import styles from "./Home.module.scss";
import { APP_AUTHOR, APP_NAME } from "../../constants";

const Home = (): ReactElement => (
  <Fragment>
    <h1 className={styles.title}>{APP_NAME}</h1>
    <h4 className={styles.subtitle}>{`By ${APP_AUTHOR}`}</h4>
    <p>This is a template for frontend react apps.</p>
  </Fragment>
);

export default Home;
