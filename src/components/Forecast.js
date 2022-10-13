import React from "react";
import "./Forecast.css";
import DayInfo from "./DayInfo";

export default function Forecast() {
  return (
    <section className="row forecast">
      <DayInfo />
      <DayInfo />
      <DayInfo />
      <DayInfo />
      <DayInfo />
      <DayInfo />
      <DayInfo />
    </section>
  );
}
