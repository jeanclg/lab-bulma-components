import React from "react";
import { Link } from "react-router-dom";

const CoolButton = (props) => {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <Link className={props.className} to={props.href}>
            <span>{props.children}</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CoolButton;
