import React from "react";

export default function WeatherIcon(props) {
  return (
    <div>
      <img
        id="weather-icon"
        src={props.weatherData.iconUrl}
        alt={props.weatherData.description}
      ></img>
    </div>
  );
}
