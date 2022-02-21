import { ReactNode, ReactElement } from "react";
import styles from "./Container.module.scss";

const Container = ({ children }: { children: ReactNode }): ReactElement => (
  <main className={styles.container}>
    <div className={styles.content}>{children}</div>
  </main>
);

export default Container;
