import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ dogNames }) => {
  return (
    <div className="Nav bg-dark py-3 mb-4">
      <h1 className="HomeLink mb-3">
        <Link to="/dogs" className="text-light text-decoration-none">
          Dogs
        </Link>
      </h1>
      <nav className="NavLinks">
        <ul className="list-unstyled d-flex justify-content-center">
          {dogNames.map((name) => (
            <li key={name} className="mx-2">
              <Link to={`/dogs/${name}`} className="text-light">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
