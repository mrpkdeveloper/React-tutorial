import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Productpage from "./components/Productpage";
import Aboutuspage from "./components/Aboutuspage";
import Ourclientpage from "./components/Ourclientpage";
import Collections from "./components/Collections";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Homepage />} />
        {/* use render when u have to pass props */}
        <Route exact path="/aboutus" render={Aboutuspage} />
        <Route exact path="/collections" component={Collections} />
        <Route
          exact
          path="/collections/productpage/:productname"
          render={() => <Productpage />}
        />
        <Route exact path="/ourclient" component={Ourclientpage} />
        {/* <Route component={Errorpage} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
