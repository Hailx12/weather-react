import React from "react";
import Form from "./Form";
import Weather from "./Weather";

import "./Container.css";

export default function Container() {
  let containerData = {
    city: "Rotterdam",
    date: "Friday 20:52",
    condition: "Scattered clouds",
  };

  return (
    <div className="Container">
      <div className="weather-container">
        <Form />
        <h2 className="city">{containerData.city}</h2>

        <h5>
          <div className="current-date">{containerData.date}</div>
          <div className="condition">{containerData.condition}</div>
        </h5>

        <Weather />
      </div>
    </div>
  );
}
