import React from "react";
import "./Forecast.css";
import DayInfo from "./DayInfo";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <section className="row forecast">
      <div className="col">
        <div className="forecast-day">
          <h5>Fri</h5>
        </div>
        <WeatherIcon code={} size={30} />
        <div className="row forecast-temperatures">
          <span className="forecast-temperatures-max">12</span>"°"
          <span className="forecast-temperatures-min">7</span>"°"
        </div>
      </div>
    </section>
  );
}
