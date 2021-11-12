import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="temperature">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Clear"
          width="65"
          class="float-left"
        />
        <span className="float-left">
          <strong>9</strong>
          <span className="unit-temp">°C </span>
        </span>
      </div>
    </div>
  );
}
