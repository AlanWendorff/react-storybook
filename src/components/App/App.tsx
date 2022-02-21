import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "../Error404";
import Header from "../Header";
import Container from "../Container";
import Home from "../Home";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { HOME } from "../../constants";

const App = (): ReactElement => (
  <Router>
    <Header />
    <Container>
      <ScrollToTop>
        <Switch>
          <Route path={HOME} component={Home} exact />
          <Route component={Error404} />
        </Switch>
      </ScrollToTop>
    </Container>
    <Footer />
  </Router>
);

export default App;
