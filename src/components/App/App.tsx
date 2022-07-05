import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../../pages/Main";
import Error404 from "../../pages/Error404";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import BackToTop from "../BackToTop";
import ScrollToTop from "../ScrollToTop";
import { HOME } from "../../constants";

const App = (): ReactElement => (
  <Router>
    <Header />
    <Container>
      <ScrollToTop>
        <Switch>
          <Route path={HOME} component={Main} exact />
          <Route component={Error404} />
        </Switch>
      </ScrollToTop>
      <BackToTop />
    </Container>
    <Footer />
  </Router>
);

export default App;
