import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import Signup from "./signup/Signup";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <BrowserRouter>
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
};

export default App;
