import "./styles.css";
import React from "react";
import axios from "axios";
import DayInfo from "./DayInfo";
import Form from "./Form";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      // defaultCity: response.data.name,
      temp: Math.round(response.data.main.temp),
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      ready: true,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function cityChange(event) {}

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="card page">
          <div className="row">
            <div className="col-12">
              <h1 className="main-city" id="current-city">
                {props.defaultCity}
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
          <section className="col forecast" id="forecast"></section>
        </div>
      </div>
    );
  } else {
    const apiKey = "cff0f825ec363b6c795a4f1421098130";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
