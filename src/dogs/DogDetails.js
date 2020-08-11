import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  // { facts: [] }
  // has to be defined because it has a method called on it
  // if it didn't, you could print it
  // other thing you could do would be to create a child component to pass the info to
  // You can always predefine the object properties in INITIAL_STATE
  // as seen below { facts: [] }
  const [dog, setDog] = useState({ facts: [] });
  const { name } = useParams();
  const history = useHistory();

  useEffect(() => {
    const found = dogs.find((dog) => dog.name === name);
    if (!found) history.replace("/dogs");
    setDog(found);
  }, [dogs, name]);

  return (
    <div className="DogDetails container">
      <div className="row">
        <div className="col-sm-6">
          <img src={dog.src} alt={dog.name} className="img-fluid mb-3" />
        </div>
        <div className="col-sm-6 text-left">
          <h1>{dog.name}</h1>
          <p>Age: {dog.age}</p>
          {dog.facts.map((fact) => (
            <p key={fact}>{fact}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
