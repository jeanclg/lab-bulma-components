import React from "react";
import "bulma/css/bulma.css";
import CoolButton from "../coolbutton/CoolButton";
import Signup from "../signup/Signup";

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
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
      </div>
      <div className="navbar-end">
        <CoolButton className="button is-info" href="#">
          Login
        </CoolButton>
        <CoolButton className="button is-primary" href="#">
          Signup
        </CoolButton>
      </div>
    </nav>
  );
}

export default Navbar;
