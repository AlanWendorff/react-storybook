import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";
import history from "../../../src/utils/history";
import Home from "../../../src/pages/Home";

describe("When Home component renders correctly", () => {
  it("should render the Home screen", () => {
    const wrapper = render(
      <React.StrictMode>
        <Router history={history}>
          <Home />
        </Router>
      </React.StrictMode>
    );

    expect(wrapper.getByTestId("home-screen")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
