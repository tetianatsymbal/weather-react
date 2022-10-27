import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response);
    const [coords, setCoords] = useState();
  }

  const apiKey = "cff0f825ec363b6c795a4f1421098130";
  const url = `api.openweathermap.org/data/2.5/forecast?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

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
