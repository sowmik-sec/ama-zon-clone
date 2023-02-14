import "./Header.css";
import logo from "../../images/Logo.svg";
import React from "react";

const Header = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" />
      <div className="nav-items">
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
