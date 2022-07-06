import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";
import Header from "../../../src/components/Header";
import history from "../../../src/utils/history";

describe("When Header component renders correctly", () => {
  it("should render a header", () => {
    const wrapper = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(wrapper.getByAltText("website logo")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
