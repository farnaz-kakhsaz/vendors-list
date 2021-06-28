import React from "react";
import { Link } from "react-router-dom";
// Components
import HomeIcon from "../../assets/images/home-icon.svg";
import BasketIcon from "../../assets/images/basket-icon.svg";
// CSS
import "./navbar.styles.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="basket-input-home-container">
        <Link to="/vendors">
          <img className="basket-icon" src={BasketIcon} alt="basket-icon" />
        </Link>
        <Link to="/home">
          <img className="home-icon" src={HomeIcon} alt="basket-icon" />
        </Link>
      </div>
    </div>
  );
}
