import "./Header.css";
import logo from "../../images/Logo.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("Sign-out successful"))
      .catch((error) => console.error(error));
  };
  return (
    <nav className="nav-bar">
      <img src={logo} alt="" />
      <div className="nav-items">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="btn-logOut" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
        <span className="user">{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
