import { ReactElement } from "react";
import VideoBanner from "./components/VideoBanner";
import styles from "./Home.module.scss";

const Home = (): ReactElement => (
  <div className={styles.container} data-testid="home-screen">
    <VideoBanner />
    <VideoBanner />
    <VideoBanner />
  </div>
);

export default Home;
