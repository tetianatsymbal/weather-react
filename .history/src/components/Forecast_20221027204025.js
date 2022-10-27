import React from "react";
import axios from "axios";
import "./Forecast.css";
import DayForecast from "./DayForecast";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <section className="row forecast">
        <DayForecast data={} />
      </section>
    );
  } else {
    const apiKey = "cff0f825ec363b6c795a4f1421098130";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
}
