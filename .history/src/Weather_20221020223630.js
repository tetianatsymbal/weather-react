import "./components/styles.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    // <div classNameName="container">
    //   <div classNameName="cardPage">
    //     <Header />
    //     <Form />
    //     <Temperature />
    //     <Forecast />
    //   </div>
    // </div>
    <div className="container">
      <div className="card page">
        <div className="row">
          <div className="col-12">
            <h1 className="main-city" id="current-city">
              Kyiv
            </h1>
          </div>
        </div>
        <div className="weather-row">
          <div className="row col-12">
            <div className="temp-now col-7">
              <img
                id="weather-icon"
                src="https://openweathermap.org/img/wn/02d@2x.png"
              ></img>
              <span id="current-temp">-</span>
              <span className="temp-units">
                {/* <!-- <div className="links"></div> --> */}
                <a href="" className="celsius active">
                  °C
                </a>{" "}
                |
                <a href="" className="fahrenheits">
                  F
                </a>
              </span>
            </div>
            <div className="weather-properties col-5">
              <h4 className="date-info">Thursday 7 of July</h4>
              <ul className="list-properties">
                <li>
                  <span id="cloudiness">-</span>
                </li>
                <li>
                  Humidity: <span id="humidity">0</span>%
                </li>
                <li>
                  Wind: <span id="wind">0</span>m/s
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row search-block">
          <form className="input-group mb-3 search-tab" id="search-form">
            <input
              type="search"
              className="form-control"
              id="input-form"
              placeholder="Type city name..."
              autocomplete="off"
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
}
