import { Fragment, ReactElement } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import { ABOUT, APP_AUTHOR, APP_NAME } from "../../constants";

const Home = (): ReactElement => (
  <Fragment>
    <h1 className={styles.title}>{APP_NAME}</h1>
    <p className={styles.paragraph}>{`By ${APP_AUTHOR}`}</p>
    <Link to={ABOUT}>About</Link>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
      laboriosam consectetur ex numquam rem dolores assumenda, omnis quidem
      possimus dicta iure corrupti accusantium alias tempore accusamus
      voluptatum adipisci totam soluta.
    </p>
  </Fragment>
);

export default Home;
