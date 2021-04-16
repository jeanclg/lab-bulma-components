import React from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
import CoolButton from "../coolbutton/CoolButton";

function Navbar() {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          ></img>
        </Link>
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
      </div>
      <div className="navbar-end">
        <CoolButton className="button is-info" href="#">
          Login
        </CoolButton>
        <CoolButton className="button is-primary" href="/signup">
          Signup
        </CoolButton>
      </div>
    </nav>
  );
}

export default Navbar;
