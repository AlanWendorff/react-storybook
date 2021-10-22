import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";

import history from "./utils/history";
import AppRoutes from "./components/AppRoutes/AppRoutes";

describe("When App component renders correctly", () => {
  it("should render the App", () => {
    const wrapper = render(
      <React.StrictMode>
        <Router history={history}>
          <AppRoutes />
        </Router>
      </React.StrictMode>
    );

    expect(
      wrapper.getByText("This is a template App for frontend react apps.")
    ).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
