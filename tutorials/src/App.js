import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        {/* use render when u have to pass props */}
        <Route exact path="/aboutus" render={Aboutus} />
      </Switch>
    </div>
  );
}

export default App;
