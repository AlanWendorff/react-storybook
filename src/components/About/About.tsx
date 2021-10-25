import { ReactElement } from "react";
import { Link } from "react-router-dom";

import styles from "./About.module.scss";
import { HOME } from "../../constants";

const About = (): ReactElement => (
  <div className={styles.text}>
    <h2>About</h2>
    <Link to={HOME} data-testid="home-link">
      Home
    </Link>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis,
      consequatur amet, eum vitae sapiente, quia quidem architecto earum
      provident corporis velit tempore sint at praesentium aut quod ad? Quaerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, excepturi
      veniam quidem voluptas molestiae a, omnis eveniet incidunt possimus
      deserunt optio! Rem, fugiat vitae consectetur laborum suscipit eaque odit
      consequatur?
    </p>
  </div>
);

export default About;
