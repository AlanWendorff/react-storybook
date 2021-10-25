import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";

import Error404 from "../Error404";
import Home from "../Home";
import ScrollToTop from "../ScrollToTop";

import { HOME } from "../../constants";

const App = (): ReactElement => (
  <ScrollToTop>
    <Switch>
      <Route path={HOME} component={Home} exact />
      <Route component={Error404} />
    </Switch>
  </ScrollToTop>
);

export default App;
