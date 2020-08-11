import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <>
      {colors.length ? (
        <div>
          <p>Please select a color.</p>
          <ul className="list-unstyled">
            {colors.map((color) => (
              <li key={color.hex} className="mb-2">
                <Link to={`/colors/${color.name}`}>{color.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ColorList;
