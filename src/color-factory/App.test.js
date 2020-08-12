import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";

test("/colors route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/colors"]}>
      <App />
    </MemoryRouter>
  );
  expect(getByText("Welcome to the color factory.")).toBeInTheDocument();
  expect(getByText("Add a color")).toBeInTheDocument();
});

test("/colors/new route", () => {
  const { getByText, getByPlaceholderText, getByDisplayValue } = render(
    <MemoryRouter initialEntries={["/colors/new"]}>
      <App />
    </MemoryRouter>
  );
  expect(getByText("New Color")).toBeInTheDocument();
  expect(getByPlaceholderText("color name")).toBeInTheDocument();
  expect(getByDisplayValue("#000000")).toBeInTheDocument();
  expect(getByText("Add Color")).toBeInTheDocument();
  expect(getByText("Cancel")).toBeInTheDocument();
});

// test("/colors/:color route", () => {
//   const { getByTestId } = render(
//     <MemoryRouter initialEntries={["/colors/:color"]}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(getByTestId("color-btn")).toBeInTheDocument();
// });

it("ColorList renders properly", function () {
  const { getByText } = render(
    <MemoryRouter>
      <ColorList colors={[{ name: "red", hex: "#f00" }]} />
    </MemoryRouter>
  );
  expect(getByText("Please select a color.")).toBeInTheDocument();
  expect(getByText("red")).toBeInTheDocument();
  fireEvent.click(getByText("red"));
  const bgColor = document.querySelector(".Color");
  console.log(bgColor);
  // expect(bgColor.style.backgroundColor).toBe('#f00');
  expect(getByText("red")).toBeInTheDocument();
});

it("Color renders properly", function () {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/colors/:color"]}>
      <Color colors={[{ name: "red", hex: "#f00" }]} />
    </MemoryRouter>
  );
  const bgColor = document.getElementsByClassName("Color");
  // expect(bgColor.style.backgroundColor).toBe('#f00');
  // expect(getByText("red")).toBeInTheDocument();
});
