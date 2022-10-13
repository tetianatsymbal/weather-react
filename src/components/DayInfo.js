import React from "react";
import "./DayInfo.css";

export default function DayInfo() {
  return (
    <div className="col dayInfo">
      <div className="day col-3">Thu</div>
      <div className="icon col-1">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="weather-icon"
          className="weatherIcon"
          width="45px"
        />
      </div>
      <div className="temperaturesBlock col-5">
        <div className="temperatures">
          <span className="minTemp">18°C</span> -
          <span className="maxTemp">22°C</span>
        </div>
      </div>
    </div>
  );
}
