import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Main_page from "./components/Main_page";
import Signin_page from "./components/Sign_in_page";
import Profile_page from "./components/Profile_page";
import Privateroute from "./components/Private_route";

import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Main_page} />
    <Route path="/sign-in" component={Signin_page} />
    <Privateroute path="/profile" component={Profile_page} />
  </BrowserRouter>,
  document.getElementById("root")
);
