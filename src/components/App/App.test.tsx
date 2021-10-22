import { render, cleanup } from "@testing-library/react";

import App from "./App";

describe("When App component renders correctly", () => {
  it("should render the App Name from .env file", () => {
    const wrapper = render(<App />);

    expect(wrapper.getByText("By")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
