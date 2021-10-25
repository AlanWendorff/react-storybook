import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About";
import Error404 from "../Error404";
import Home from "../Home";
import ScrollToTop from "../ScrollToTop";

import { ABOUT, HOME } from "../../constants";

const App = (): ReactElement => (
  <ScrollToTop>
    <Switch>
      <Route path={ABOUT} component={About} exact />
      <Route path={HOME} component={Home} exact />
      <Route component={Error404} />
    </Switch>
  </ScrollToTop>
);

export default App;
