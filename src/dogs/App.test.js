import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";

test("renders Nav", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Nav dogNames={["Whiskey", "Duke", "Perry", "Tubby"]} />
    </MemoryRouter>
  );
  expect(getByText("Whiskey")).toBeInTheDocument();
  expect(getByText("Duke")).toBeInTheDocument();
  expect(getByText("Perry")).toBeInTheDocument();
  expect(getByText("Tubby")).toBeInTheDocument();
  fireEvent.click(getByText("Tubby"));
  expect(getByText("Tubby")).toBeInTheDocument();
});

test("/dogs route", () => {
  const { getByText, getByAltText } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <App />
    </MemoryRouter>
  );
  // links
  expect(getByText("Whiskey")).toBeInTheDocument();
  expect(getByText("Duke")).toBeInTheDocument();
  expect(getByText("Perry")).toBeInTheDocument();
  expect(getByText("Tubby")).toBeInTheDocument();
  // images
  expect(getByAltText("Whiskey")).toBeInTheDocument();
  expect(getByAltText("Duke")).toBeInTheDocument();
  expect(getByAltText("Perry")).toBeInTheDocument();
  expect(getByAltText("Tubby")).toBeInTheDocument();
});

// test("/dogs/Whiskey", () => {
//   const { queryByAltText } = render(
//     <MemoryRouter initialEntries={["/dogs/Whiskey"]}>
//       <DogDetails
//         dogs={[
//           {
//             name: "Whiskey",
//             age: 5,
//             src: "",
//             facts: [
//               "Whiskey loves eating popcorn.",
//               "Whiskey is a terrible guard dog.",
//               "Whiskey wants to cuddle with you!",
//             ],
//           },
//         ]}
//       />
//     </MemoryRouter>
//   );
// expect(queryByAltText("Whiskey")).toBeInTheDocument();
// });

it("DogList renders properly", function () {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ];
  const { getByAltText } = render(
    <MemoryRouter>
      <DogList dogs={dogs} />
    </MemoryRouter>
  );
  expect(getByAltText("Whiskey")).toBeInTheDocument();
  expect(getByAltText("Duke")).toBeInTheDocument();
  expect(getByAltText("Perry")).toBeInTheDocument();
  expect(getByAltText("Tubby")).toBeInTheDocument();
  // expect(getByText("red")).toBeInTheDocument();
  // fireEvent.click(getByText("red"));
  // const bgColor = document.querySelector(".Color");
  // console.log(bgColor);
  // expect(getByText("red")).toBeInTheDocument();
});

// it("Color renders properly", function () {
//   const { getByText } = render(
//     <MemoryRouter initialEntries={["/colors/:color"]}>
//       <Color colors={[{ name: "red", hex: "#f00" }]} />
//     </MemoryRouter>
//   );
//   const bgColor = document.getElementsByClassName("Color");
// expect(bgColor.style.backgroundColor).toBe('#f00');
// expect(getByText("red")).toBeInTheDocument();
// });
