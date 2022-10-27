import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col-2">
      <div className="forecast-day">
        <h5>{day()}</h5>
      </div>
      <WeatherIcon code={props.code} size={28} />
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">
          <span className="forecast-temperature-max-value">12</span>
          {"°"}
        </span>
        <span className="forecast-temperature-min">
          <span className="forecast-temperature-min-value">7</span>
          {"°"}
        </span>
      </div>
    </div>
  );
}
