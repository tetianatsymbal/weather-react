import React from "react";
import "./DayInfo.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function DayInfo(props) {
  return (
    <div className="weather-row">
      <div className="row col-12">
        <div className="temp-now col-7 md-3">
          <WeatherIcon code={props.weatherData.icon} />
          <Temperature celsius={props.weatherData.temp} />
          {/* <span id="current-temp">{props.weatherData.temp} </span>
          <span className="temp-units">
            <a href="#" className="celsius active">
              °C
            </a>{" "}
            |
            <a href="#" className="fahrenheit">
              °F
            </a>
          </span> */}
        </div>
        <div className="weather-properties col-5">
          <h4 className="date-info">
            <FormattedDate date={props.weatherData.date} />
          </h4>
          <ul className="list-properties">
            <li>
              <span className="text-capitalize" id="description">
                {props.weatherData.description}
              </span>
            </li>
            <li>
              Humidity: <span id="humidity">{props.weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.weatherData.wind}</span> m/s
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
