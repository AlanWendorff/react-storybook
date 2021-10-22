import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

const App = ({ children }: Props): ReactElement => <div>{children}</div>;

export default App;
