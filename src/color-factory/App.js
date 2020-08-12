import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
import Color from "./Color";

function App() {
  const INITIAL_STATE = [{ name: "red", hex: "#f00" }];
  const [colors, setColors] = useState(INITIAL_STATE);
  useEffect(() => {
    const myColors = localStorage.getItem("colors");
    if (myColors) setColors(JSON.parse(myColors));
    else localStorage.setItem("colors", JSON.stringify(INITIAL_STATE));
  }, []);
  const addColor = (color) => {
    setColors((c) => [color, ...colors]);
    const myColors = localStorage.getItem("colors");
    if (myColors) {
      const storageColors = JSON.parse(myColors);
      localStorage.setItem("colors", JSON.stringify([color, ...storageColors]));
    } else {
      localStorage.setItem("colors", JSON.stringify([color]));
    }
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <Header />
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColor} />
        </Route>
        <Route exact path="/colors/:color">
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
