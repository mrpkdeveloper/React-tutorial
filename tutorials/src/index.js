// var React = require("react"); oldjavascript
import React from "react"; //new ecmascript react is imported to use jsx
// var ReactDom = require("react-dom"); oldjavascript
import ReactDom from "react-dom"; //new ecmascript
import "./index.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Productcard from "./components/Productcard";
import App from "./App";

// ReactDom.render('kya dikhana hain ' , 'kha dikhana hain','callback function')
//this below h1 line is jsx not html

const name = "prateek";
const currentdate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();

ReactDom.render(
  <>
    <Navbar />
    <Heading />
    <App />
    {/* props concept */}
    <Productcard title="hello1" />
    <Productcard title="hello2" />
    <h1 className="heading">hello world , my name is {name}</h1>
    <p style={{ color: "red", margin: "100px" }}>
      this is a simple list made on currentdate={currentdate}{" "}
    </p>
    <p>this is a simple list mad on currentime={currenttime} </p>
    <ol>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ol>
  </>,
  document.getElementById("root")
);
