import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import Clock from "./Clock";
import TimezoneClock from "./TimezoneClock";
import TimezoneManager from './TimezoneManager'
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TimezoneManager />
  </React.StrictMode>,
  document.getElementById("root")
);
