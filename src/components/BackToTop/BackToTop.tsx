import { ReactElement, useState } from "react";
import styles from "./BackToTop.module.scss";

const BackToTop = (): ReactElement => {
  const [style, setStyle] = useState("");

  window.onscroll = function (e) {
    setStyle(window.pageYOffset > 800 ? styles.show : "");
  };

  return (
    <div className={styles.container}>
      <a href="#top" className={style}>
        <p>TO TOP ↑</p>
      </a>
    </div>
  );
};

export default BackToTop;
