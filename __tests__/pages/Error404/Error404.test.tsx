import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";
import history from "../../../src/utils/history";
import Error404 from "../../../src/pages/Error404";

describe("When Error404 component renders correctly", () => {
  it("should render the 404 error screen", () => {
    const wrapper = render(
      <React.StrictMode>
        <Router history={history}>
          <Error404 />
        </Router>
      </React.StrictMode>
    );

    expect(wrapper.getByText("Error 404")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
