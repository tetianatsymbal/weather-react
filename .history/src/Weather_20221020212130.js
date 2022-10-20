import React from "react";
import "./components/styles.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="cardPage">
        <Header />
        <Form />
        <Temperature />
        <Forecast />
      </div>
    </div>
  );
}
