import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import Signup from "./signup/Signup";
import HomePage from "./homepage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    </div>
  );
};

export default App;
