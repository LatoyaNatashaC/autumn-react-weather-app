import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Forecast</h1>
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
