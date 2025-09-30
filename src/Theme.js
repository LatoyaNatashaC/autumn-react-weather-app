import React from "react";

export default function Theme() {
  return (
    <div className="selector-box">
      <select id="theme">
        <option value="">Choose a season to change the theme</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Autumn">Autumn</option>
        <option value="Winter">Winter</option>
      </select>
    </div>
  );
}
