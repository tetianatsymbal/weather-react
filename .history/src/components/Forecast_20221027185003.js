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
        <WeatherIcon code={props.code} size={28} />
        {/* <div className="row"> */}
        <div className=" forecast-temperatures">
          <div className=" col-6 forecast-temperature-max">
            <span className="forecast-temperature-max-value">12</span>
            {"°"}
          </div>
          <div className="col-6 forecast-temperature-min">
            <span className="forecast-temperature-min-value">7</span>
            {"°"}
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
