import { ReactElement } from "react";
import Home from "../../pages/Home";
import styles from "./Main.module.scss";

const Main = (): ReactElement => (
  <div className={styles.container}>
    <Home />
  </div>
);

export default Main;
