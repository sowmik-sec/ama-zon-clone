import "./Header.css";
import logo from "../../images/Logo.svg";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" />
      <div className="nav-items">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
};

export default Header;
