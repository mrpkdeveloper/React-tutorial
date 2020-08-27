import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoimg item" src="../assets/hashlogo2.png" alt="" />
        <h1 className="logonamenavbar">BlackHush</h1>
      </div>
      <ul className="navigation">
        <li className="item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li className="item">
          <a href="#Themes">Themes</a>
        </li>
        <li className="item">
          <a href="#Our-Clients">Our Clients</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
