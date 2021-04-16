import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import FormField from "../formfield/FormField";
import "bulma/css/bulma.css";

const Signup = () => {
  return (
    <div>
      <FormField label="Name" type="text" />
      <FormField label="Email" type="email" />
      <FormField label="Password" type="password" />
      <CoolButton className="button is-blue" name="Submit" />
    </div>
  );
};

export default Signup;
