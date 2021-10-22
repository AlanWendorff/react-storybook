import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { HOME } from "../../constants";

const About = (): ReactElement => (
  <div>
    <h2>About</h2>
    <Link to={HOME}>Home</Link>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, excepturi
      veniam quidem voluptas molestiae a, omnis eveniet incidunt possimus
      deserunt optio! Rem, fugiat vitae consectetur laborum suscipit eaque odit
      consequatur?
    </p>
  </div>
);

export default About;
