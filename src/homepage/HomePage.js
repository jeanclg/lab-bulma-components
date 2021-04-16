import React from "react";
import { Link } from "react-router-dom";
import FormField from "../formfield/FormField";

const HomePage = () => {
  return (
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
    </div>
  );
};

export default HomePage;
