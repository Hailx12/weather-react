import React from "react";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Windspeed from "./Windspeed";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-forecast" id="weather-forecast">
        <div className="row">
          <div className="col-6">
            <Temperature />
          </div>
          <div className="col-6">
            <Humidity />
            <Windspeed />
          </div>
        </div>
        <Forecast />
      </div>
    </div>
  );
}
