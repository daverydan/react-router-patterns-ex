import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ColorList from "./ColorList";

it("ColorList renders properly", function () {
  const { getByText, queryByText } = render(
    <MemoryRouter>
      <ColorList colors={[{ name: "red", hex: "#f00" }]} />
    </MemoryRouter>
  );
  expect(getByText("Please select a color.")).toBeInTheDocument();
  expect(getByText("red")).toBeInTheDocument();
  fireEvent.click(queryByText("red"));
  const bgColor = document.querySelector(".Color");
  console.log(bgColor);
  // expect(bgColor.style.backgroundColor).toBe('#f00');
  expect(getByText("reds")).toBeInTheDocument();
});
