import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";

import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import AppRoutes from "./components/AppRoutes";
import history from "./utils/history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
