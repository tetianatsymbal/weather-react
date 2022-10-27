import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="col">
      <div className="forecast-day">
        <h5>{day()}</h5>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={28} />
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">
          <span className="forecast-temperature-max-value">
            {Math.round(props.data.temp.max)}
          </span>
          {"°"}
        </span>
        <span className="forecast-temperature-min">
          <span className="forecast-temperature-min-value">
            {Math.round(props.data.temp.min)}
          </span>
          {"°"}
        </span>
      </div>
    </div>
  );
}
