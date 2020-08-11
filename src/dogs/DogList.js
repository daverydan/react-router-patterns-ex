import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList container d-flex">
      {dogs.map((dog) => (
        <div key={dog.name} className="Dog mx-2">
          <Link to={`/dogs/${dog.name}`}>
            <img
              src={dog.src}
              alt={dog.name}
              className="img-thumbnail"
              width="400"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;
