import { ReactElement } from "react";

import ScrollToTop from "../ScrollToTop";

type Props = {
  children: ReactElement;
};

const App = ({ children }: Props): ReactElement => (
  <ScrollToTop>{children}</ScrollToTop>
);

export default App;
