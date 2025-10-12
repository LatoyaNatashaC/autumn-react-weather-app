import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Theme from "./Theme";
import summerImg from "./images/summer.png";
import springImg from "./images/spring.png";
import autumnImg from "./images/fall.png";
import winterImg from "./images/winter.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Theme />
        <h1 className="mb-3">Weather Forecast</h1>

        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
