import "./styles.css";
import React from "react";
import axios from "axios";
import DayInfo from "./DayInfo";
import { useState } from "react";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      coord: response.data.coord,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      ready: true,
    });
  }
  function search() {
    const apiKey = "cff0f825ec363b6c795a4f1421098130";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    console.log(weatherData.ready);
    return (
      <div className="container">
        <div className="card page">
          <div className="row">
            <div className="col-12">
              <h1 className="main-city" id="current-city">
                {weatherData.city}
              </h1>
            </div>
          </div>
          <DayInfo weatherData={weatherData} />
          <div className="row search-block">
            <form
              className="input-group mb-3 search-tab"
              id="search-form"
              onSubmit={handleSubmit}
            >
              <input
                type="search"
                className="form-control"
                id="input-form"
                placeholder="Type city name..."
                onChange={cityChange}
              ></input>
              <button
                className="btn btn-outline-light search-button"
                type="submit"
                value="search"
                id="start-button"
              >
                Search
              </button>
              <button
                className="btn btn-outline-light location-button"
                type="button"
                id="current-location"
              >
                Current location
              </button>
            </form>
          </div>
          <Forecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
