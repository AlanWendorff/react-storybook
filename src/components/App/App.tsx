import { Fragment, ReactElement } from "react";
import { APP_AUTHOR, APP_NAME } from "../../constants/env";

import styles from "./App.module.css";

const App = (): ReactElement => (
  <Fragment>
    <h1 className={styles.title}>{APP_NAME}</h1>
    <p className={styles.paragraph}>{`By ${APP_AUTHOR}`}</p>
  </Fragment>
);

export default App;
