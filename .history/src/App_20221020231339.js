import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <div class="link-to-code">
          <a
            href="https://github.com/tetianatsymbal/weather-react"
            className="link-to-git"
          >
            Open-source code
          </a>
          <span className="author"> by Tania Tsymbal</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
