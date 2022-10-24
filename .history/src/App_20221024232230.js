import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <footer>
        <div className="link-to-code">
          <a
            href="https://github.com/tetianatsymbal/weather-react"
            className="link-to-git"
          >
            Open-source code
          </a>
          <span className="author"> by Tania Tsymbal</span>{" "}
          <span>
            hosted at{" "}
            <a
              href="https://github.com/tetianatsymbal/weather-react"
              className="link-to-git"
            >
              {" "}
              Netlify
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
