import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./img/logo.svg" alt="logo" />
      </div>
      <div className="input">
        <input type="text" placeholder="Select court"/>
        <img src="./img/input-arrow.svg" alt="" />
      </div>
      <div className="photo">
        <img src="./img/photo.svg" alt="img" />
      </div>
    </div>
  );
};

export default Navbar;
