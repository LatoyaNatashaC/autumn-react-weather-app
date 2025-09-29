import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Sun</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">80º </span>
            <span className="forecastTempreature-min">64º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Mon</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">77º </span>
            <span className="forecastTempreature-min">64º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Tue</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">79º </span>
            <span className="forecastTempreature-min">59º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Wed</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">68º </span>
            <span className="forecastTempreature-min">51º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Thur</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">64º </span>
            <span className="forecastTempreature-min">52º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Fri</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">68º </span>
            <span className="forecastTempreature-min">55º </span>
          </div>
        </div>
      </div>
    </div>
  );
}
