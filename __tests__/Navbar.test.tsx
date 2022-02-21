import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navbar from "../src/components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("When Navbar component renders correctly", () => {
  it("should render a menu sections", () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );

    expect(wrapper.getByText("Home")).toBeInTheDocument();
    expect(wrapper.getByText("Section 1")).toBeInTheDocument();
    expect(wrapper.getByText("Section 2")).toBeInTheDocument();
    expect(wrapper.getByText("Section 3")).toBeInTheDocument();
    expect(wrapper.getByText("Section 4")).toBeInTheDocument();
    expect(wrapper.getByText("Section 5")).toBeInTheDocument();
  });

  afterAll(() => cleanup());
});
