import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Theme from "./Theme";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Theme />
        <h1>Weather Forecast</h1>

        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
