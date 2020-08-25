import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

var msg = "Good Morning";
// let currtime = new Date().toLocaleTimeString();
let currtimeexact = new Date().ge;
let currtime = new Date().getHours();
let timecss = {
  color: "black",
};

if (currtime > 12 && currtime <= 16) {
  msg = "Good Afternoon";
  timecss.color = "yellow";
} else if (currtime > 16 && currtime <= 20) {
  msg = "Good Evening";
  timecss.color = "blue";
} else if (currtime > 20 && currtime <= 24) {
  msg = "Good Night";
  timecss.color = "purple";
} else {
  msg = "Good Morning";
  timecss.color = "green";
}

ReactDOM.render(
  <>
    <div className="greetmsg">
      <h1>
        hello User ,<span style={timecss}>{msg} </span>
      </h1>
    </div>
    <App />
  </>,
  document.getElementById("root")
);
