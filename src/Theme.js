import React, { useState } from "react";
import summerImg from "./images/summer.png";
import springImg from "./images/spring.png";
import autumnImg from "./images/autumn.png";
import winterImg from "./images/winter.png";
import "./Theme.css";
import "./App.css";

export default function Theme() {
  return (
    <div className="selector-box">
      <select id="seasonSelect">
        <option value="">Choose a theme...</option>
        <option value="Spring">Spring 🌸</option>
        <option value="Summer">Summer 🌤 </option>
        <option value="Autumn">Autumn 🍁</option>
        <option value="Winter">Winter ⛄️</option>
      </select>
    </div>
  );
}
