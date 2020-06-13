import React, { Component } from "react";

// stateless functional components
function NavBar({totalProducts}){
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#" style={{ color: "palegreen" }}>
        Selected Items:
        <div
          className="badge badge-pill badge-secondary"
          style={{ marginLeft: 10 }}
        >
          {totalProducts}
        </div>
      </a>
    </nav>
  );
};
export default NavBar;
