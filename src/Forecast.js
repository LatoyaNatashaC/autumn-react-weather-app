import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Sun</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              <strong>80º </strong>{" "}
            </span>
            <span className="forecastTempreature-min">64º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Mon</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              <strong>77º</strong>{" "}
            </span>
            <span className="forecastTempreature-min">64º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Tue</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              <strong>79º</strong>{" "}
            </span>
            <span className="forecastTempreature-min">59º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Wed</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              <strong>68º </strong>
            </span>
            <span className="forecastTempreature-min">51º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Thur</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              <strong>64º</strong>{" "}
            </span>
            <span className="forecastTempreature-min">52º </span>
          </div>
        </div>
        <div className="col">
          <div className="forecastDay">Fri</div>
          Icon
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">
              <strong>68º</strong>{" "}
            </span>
            <span className="forecastTempreature-min">55º </span>
          </div>
        </div>
      </div>
    </div>
  );
}
