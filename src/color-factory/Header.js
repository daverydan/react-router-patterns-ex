import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header bg-dark py-4 mb-4 text-light">
      <h3>Welcome to the color factory.</h3>
      <Link to="/colors/new" className="btn btn-info mt-2">
        Add a color
      </Link>
    </div>
  );
};

export default Header;
