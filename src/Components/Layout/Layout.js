import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
