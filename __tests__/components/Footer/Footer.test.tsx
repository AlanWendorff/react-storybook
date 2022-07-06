import React from "react";
import { render, cleanup } from "@testing-library/react";
import Footer from "../../../src/components/Footer";

describe("When Footer component renders correctly", () => {
  it("should render a specific text", () => {
    const wrapper = render(<Footer />);

    expect(wrapper.getByText("powered by NFT STUDIOS")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
