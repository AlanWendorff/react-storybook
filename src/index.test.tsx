import React from "react";
import { Router } from "react-router";
import { render, cleanup, fireEvent } from "@testing-library/react";

import history from "./utils/history";
import AppRoutes from "./components/AppRoutes/AppRoutes";

describe("When App component renders correctly", () => {
  it("should render the App and navigation should work correctly", () => {
    const wrapper = render(
      <React.StrictMode>
        <Router history={history}>
          <AppRoutes />
        </Router>
      </React.StrictMode>
    );

    fireEvent.click(wrapper.getByTestId("about-link"));
    expect(wrapper.getByText("About")).toBeInTheDocument;

    fireEvent.click(wrapper.getByTestId("home-link"));
    expect(
      wrapper.getByText("This is a template App for frontend react apps.")
    ).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
