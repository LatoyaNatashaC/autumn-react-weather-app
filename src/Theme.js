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
        <option value="spring">spring 🌷</option>
        <option value="summer">summer 🌤</option>
        <option value="autumn">autumn 🍁</option>
        <option value="winter">winter ⛄️</option>
      </select>
    </div>
  );
}
