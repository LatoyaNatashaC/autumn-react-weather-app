import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import DisplayDate from "./DisplayDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Los Angeles");

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "203fa770242fcd2b9555d832a88ea567";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h2 className="mt-3">{weatherData.city}</h2>
        <ul>
          <li>
            <DisplayDate date={weatherData.date} />
          </li>
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
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading Weather...";
  }
}
