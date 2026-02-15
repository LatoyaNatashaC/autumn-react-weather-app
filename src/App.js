import React, { useState } from "react";

import "./App.css";
import Weather from "./Weather";
import Theme from "./Theme";
import summerImg from "./images/summer.png";
import springImg from "./images/spring.png";
import autumnImg from "./images/autumn.png";
import winterImg from "./images/winter.png";

export default function App() {
  const seasonThemes = {
    summer: summerImg,
    spring: springImg,
    autumn: autumnImg,
    winter: winterImg,
  };
  const [season, setSeason] = useState("winter");

  function handleSelection(event) {
    const selectedSeason = event.target.value;
    console.log("User selected:", selectedSeason);
    if (selectedSeason in seasonThemes) {
      setSeason(selectedSeason);
    }
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${seasonThemes[season]})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "30px",
        transition: "background-image 0.4s ease-in-out",
      }}
    >
      <div className="container">
        <Theme season={season} handleSelection={handleSelection} />
        <h1 className="mb-3">Weather Forecast</h1>

        <Weather />

        <footer className="mt-5">
          By:{" "}
          <a
            href="https://github.com/LatoyaNatashaC"
            target="_blank"
            rel="noreferrer"
          >
            Latoya
          </a>
        </footer>
      </div>
    </div>
  );
}
