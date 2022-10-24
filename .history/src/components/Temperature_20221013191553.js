import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Weather">
      <div className="row col-12">
        <div className="tempNow col-7">
          <img
            id="weather-icon"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="weather icon"
          />
          <span id="current-temp"> 22 </span>
          <span className="temp-units"> °C </span>
        </div>
        <div className="WeatherProperties col-5">
          <h4 className="date-info">Thursday 7 of July</h4>
          <ul>
            <li>
              Cloudiness: <span id="cloudiness"></span>35%
            </li>
            <li>
              Humidity: <span id="humidity"></span>54%
            </li>
            <li>
              Wind: <span id="wind-speed"></span>1m/s
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
