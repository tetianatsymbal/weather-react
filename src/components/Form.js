import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="row search-block">
      <form className="input-group mb-3 search-tab" id="search-form">
        <input
          type="search"
          className="form-control"
          id="input-form"
          placeholder="Type city name..."
        />
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
  );
}
