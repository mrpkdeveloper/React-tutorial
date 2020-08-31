import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="logoimg item"
          src={require("../assets/skull.png")}
          alt="image"
        />
        <h1 className="logonamenavbar">HashBlack</h1>
      </div>
      <ul className="navigation">
        <li className="item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/aboutus">About US</NavLink>
        </li>
        <li className="item">
          <NavLink to="/collections">Products</NavLink>
        </li>
        <li className="item">
          <NavLink to="/ourclient">Our Client</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
