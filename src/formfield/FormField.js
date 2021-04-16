import React from "react";
import "./FormField.css";

const FormField = (props) => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input className="input" type="email" placeholder={props.placeholder}>
          {props.input}
        </input>
      </div>
    </div>
  );
};

export default FormField;
