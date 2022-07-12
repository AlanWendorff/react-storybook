import React from "react";
import { Router } from "react-router";
import { render, cleanup } from "@testing-library/react";
import history from "../../../src/utils/history";
import App from "../../../src/components/App";

describe("When App component renders correctly", () => {
  it("should render the description paragraph", () => {
    const wrapper = render(
      <React.StrictMode>
        <Router history={history}>
          <App />
        </Router>
      </React.StrictMode>
    );

    expect(wrapper.getByText("powered by NFT STUDIOS")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
