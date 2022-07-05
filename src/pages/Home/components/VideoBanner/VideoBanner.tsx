import { ReactElement } from "react";
import styles from "./VideoBanner.module.scss";

const VideoBanner = (): ReactElement => (
  <div className={styles.container}>
    <iframe
      width="1200"
      height="600"
      title="coming soon"
      src="https://www.youtube.com/embed/JvKT5NizMrA"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoBanner;
