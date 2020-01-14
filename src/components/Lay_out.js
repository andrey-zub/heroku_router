import React from "react";

import Button from "../button";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => (
  <header>
    <h2> Router </h2>
    <Button
      label="Log Out"
      handleClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    />
    <nav>
      <ul>
        <li>
          <Link to="/">Main page</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign_in page</Link>
        </li>
        <li>
          <Link to="/profile">Profile page</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Layout = () => (
  <div>
    <Header />
    <div className="horizLine" />
  </div>
);

export default Layout;
