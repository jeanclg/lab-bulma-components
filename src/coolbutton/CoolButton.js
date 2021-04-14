import React from "react";

const CoolButton = (props) => {
  return (
    <div className="navbar-item">
      <div className="field is-grouped">
        <p className="control">
          <a className={props.className} href={props.href}>
            <span>{props.children}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default CoolButton;
