import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Spinner } from "./index";

describe("Spinner", () => {
  it("renders the spinner image", () => {
    const { getByAltText } = render(<Spinner />);
    const spinnerImage = getByAltText("Loading...");
    expect(spinnerImage).toBeInTheDocument();
  });
});
