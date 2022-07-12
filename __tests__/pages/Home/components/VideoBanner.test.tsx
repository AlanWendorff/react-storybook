import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";
import history from "../../../../src/utils/history";
import VideoBanner from "../../../../src/pages/Home/components/VideoBanner";

describe("When VideoBanner component renders correctly", () => {
  it("should render the VideoBanner component", () => {
    const wrapper = render(
      <React.StrictMode>
        <Router history={history}>
          <VideoBanner />
        </Router>
      </React.StrictMode>
    );

    expect(wrapper.getByTitle("Tom Sachs video")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
