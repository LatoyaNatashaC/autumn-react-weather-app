import React, { useState, useEffect } from "react";
import "./Weather.css";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Los Angeles");

  useEffect(() => {
    search();
  }, []);

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city.name,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (!weatherData.ready) {
    return "Loading Weather...";
  }

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
          <div className="temperature">
            <WeatherIcon code={weatherData.icon} size={52} />

            <CurrentWeather fahrenheit={weatherData.temperature} />
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Humidity:
              {weatherData.humidity}%
            </li>
            <li>
              Wind:
              {weatherData.wind} mph
            </li>
          </ul>
        </div>
      </div>
      <WeatherForecast
        coordinates={weatherData.coordinates}
        city={weatherData.city}
      />
    </div>
  );
}
