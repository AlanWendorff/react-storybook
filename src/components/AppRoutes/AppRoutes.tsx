import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About";
import App from "../App";
import Error404 from "../Error404";
import Home from "../Home";

import { ABOUT, HOME } from "../../constants";

const AppRoutes = (): ReactElement => (
  <App>
    <Switch>
      <Route path={ABOUT} component={About} exact />
      <Route path={HOME} component={Home} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
