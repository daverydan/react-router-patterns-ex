import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const Color = ({ colors }) => {
  const [currentColor, setCurrentColor] = useState("");
  const { color } = useParams();
  const history = useHistory();

  useEffect(() => {
    const found = colors.find((c) => c.name === color);
    if (!found) history.replace("/colors");
    else setCurrentColor(found);
  }, [colors, color, history]);

  return (
    <div
      className="Color"
      style={{ background: currentColor.hex, height: "100vh" }}
    >
      <button
        className="btn btn-light"
        style={{ marginTop: "50%", transform: "translateY(-50%)" }}
      >
        <h1>{currentColor.name}</h1>
      </button>
    </div>
  );
};

export default Color;
