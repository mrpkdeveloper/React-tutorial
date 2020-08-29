import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";
import Productpage from "./components/Productpage";
import Errorpage from "./components/Errorpage";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        {/* use render when u have to pass props */}
        <Route exact path="/aboutus" render={Aboutus} />
        <Route exact path="/productpage/:productname" component={Productpage} />
        <Route component={Errorpage} />
      </Switch>
    </div>
  );
}

export default App;
