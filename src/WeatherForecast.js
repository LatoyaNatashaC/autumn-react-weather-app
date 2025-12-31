import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);

    if (!props.coordinates) return;

    let apiKey = "4f3b0tf3219b4c7758082d0o48eabbbe";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }, [props.coordinates]);

  function handleResponse(response) {
    const daily = Array.isArray(response.data.daily) ? response.data.daily : [];
    setForecast(daily);
    setLoaded(true);
  }

  function handleError(error) {
    console.log("Forecast error:", error.response || error.message);
    setForecast([]);
    setLoaded(true);
  }

  if (!loaded) {
    return (
      <div className="WeatherForecast">
        <div className="WeatherForecast-loading">Loading forecast...</div>
      </div>
    );
  }

  if (forecast.length === 0) {
    return (
      <div className="WeatherForecast">
        <div className="WeatherForecast-loading"> No forecast availavle...</div>
      </div>
    );
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(0, 5).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        ))}
      </div>
    </div>
  );
}
