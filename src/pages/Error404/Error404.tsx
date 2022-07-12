import { ReactElement } from "react";
import styles from "./Error404.module.scss";

const Error404 = (): ReactElement => (
  <div id="error404" className={styles.container}>
    <h1>Error 404</h1>
    <p>Page not found.</p>
  </div>
);

export default Error404;
