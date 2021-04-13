import React from "react";
import "bulma/css/bulma.css";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          ></img>
        </a>
      </div>
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
    </nav>
  );
}

export default Navbar;
