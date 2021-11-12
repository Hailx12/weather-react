import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a City..."
            />
          </div>
          <div className="col-3">
            <input
              className="search-button"
              type="submit"
              value="Search"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <button className="current-button">Current</button>
          </div>
        </div>
      </form>
    </div>
  );
}
