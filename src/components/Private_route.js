import React from "react";
import { Route, Redirect } from "react-router-dom";

const Privateroute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("login") === null ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default Privateroute;
