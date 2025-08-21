import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#222",
    color: "white",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  };

  const brandStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  };

  const menuStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      {/* Brand / Logo */}
      <Link to="/" style={brandStyle}>
        MyPortfolio
      </Link>

      {/* Navigation Menu */}
      <div style={menuStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/skills" style={linkStyle}>Skills</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
