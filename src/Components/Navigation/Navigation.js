import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <span className="logo">
        money
        <span className="bold-logo">
          rise<span className="dot"></span>
        </span>
      </span>
      <div className="links">
        <li>Contact us</li>
        <li>About</li>
      </div>
    </div>
  );
}
