import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import Clock from "./Clock";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById("root")
);
