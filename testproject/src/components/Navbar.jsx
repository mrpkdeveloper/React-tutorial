import React from "react";
// import skull from "./assets/skull.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logoimg item" src={require('../assets/skull.png')} alt="image" />
        <h1 className="logonamenavbar">HashBlack</h1>
      </div>
      <ul className="navigation">
        <li className="item">
          <a href="#" data-component="home">
            Home
          </a>
        </li>
        <li className="item">
          <a href="#">About Us</a>
        </li>
        <li className="item">
          <a href="#" data-component="productpage">
            Products
          </a>
        </li>
        <li className="item">
          <a href="#Our-Clients">Our Clients</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
