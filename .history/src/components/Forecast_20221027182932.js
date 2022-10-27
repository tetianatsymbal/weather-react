import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <section className="row forecast">
      <div className="col-3">
        <div className="forecast-day">
          <h5>Fri</h5>
        </div>
        <WeatherIcon code={props.code} size={30} />
        <div className="forecast-temperatures">
          <span className="forecast-temperatures-max">12</span>
          {"°"} <span className="forecast-temperatures-min">7</span>
          {"°"}
        </div>
      </div>
    </section>
  );
}
