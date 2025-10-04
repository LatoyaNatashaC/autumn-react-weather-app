import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2>New York</h2>
      <ul>
        <li>Saturday 2:08 PM</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/cloudy_light.svg"
            alt="Cloudy"
          />
          <span className="currentTemperature">78</span>{" "}
          <span className="unit">ºF</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precepitation: 0% </li>
            <li>Humidity: 51%</li>
            <li>Wind: 1 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
