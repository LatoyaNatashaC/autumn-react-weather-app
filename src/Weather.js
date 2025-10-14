import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      iconurl:
        "https://www.gstatic.com/weather/conditions2023/2023.2/svg/drizzle_light.svg",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
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
        <h2 className="mt-3">Los Angeles</h2>
        <ul>
          <li>Tuesday 14</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="currentTemperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="unit">ºF</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precepitation: 0% </li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "203fa770242fcd2b9555d832a88ea567";
    let city = "Los Angeles";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
