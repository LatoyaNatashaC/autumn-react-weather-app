import React, { useState } from "react";
import "./Weather.css";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="currentWeather">
        <span className="currentTemperature">
          {Math.round(props.fahrenheit)}
        </span>
        <span className="unit">
          ℉ |{" "}
          <a href="/" onClick={displayCelsius}>
            ℃
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="currentWeather">
        <span className="currentTemperature">{Math.round(celsius)}</span>{" "}
        <span className="unit">
          <a href="/" onClick={displayFahrenheit}>
            ℉
          </a>{" "}
          | ℃
        </span>
      </div>
    );
  }
}
