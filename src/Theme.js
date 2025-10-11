import React, { useState } from "react";
import "./Theme.css";

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
