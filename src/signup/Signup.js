import React from "react";
import Navbar from "../navbar/Navbar";
import CoolButton from "../coolbutton/CoolButton";
import FormField from "../formfield/FormField";

const Signup = (props) => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" />
      <CoolButton className="button is-black" name="Submit" />
    </div>
  );
};

export default Signup;
