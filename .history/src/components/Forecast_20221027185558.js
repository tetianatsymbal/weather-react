import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <section className="row forecast">
      <div className="col-2">
        <div className="forecast-day">
          <h5>Fri</h5>
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
    </section>
  );
}
