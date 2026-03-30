import React from "react";

export default function Theme({ season, handleSelection }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <select id="seasonSelect" value={season} onChange={handleSelection}>
        <option value="" disabled>
          Choose a theme...
        </option>
        <option value="spring">Spring 🌷</option>
        <option value="summer">Summer 🌤</option>
        <option value="autumn">Autumn 🍁</option>
        <option value="winter">Winter ⛄️</option>
      </select>
    </div>
  );
}
