import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "yellow",
    textDecoration: isActive && "underline",
  });

  return (
    <nav>
      <NavLink to="/" className="navlink" style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to="/search" className="navlink" style={getActiveStyle}>
        Search
      </NavLink>
    </nav>
  );
};

export default Navbar;
