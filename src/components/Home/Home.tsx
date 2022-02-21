import { ReactElement } from "react";
import styles from "./Home.module.scss";

const Home = (): ReactElement => (
  <div className={styles.container}>
    <iframe
      width="1200"
      height="600"
      title="coming soon"
      src="https://www.youtube.com/embed/mY-fSnKTLqw"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
);

export default Home;
