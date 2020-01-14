import React from "react";
import "../styles.css";
import Layout from "./Lay_out";

const Profile_page = () => (
  <div>
    <Layout />
    <div>It`s users page</div>
    <p>
      <div> User: {localStorage.getItem("login")} </div>
      <div> Pass: {localStorage.getItem("password")} </div>
    </p>
    <div>[ Privat page ]</div>
  </div>
);

export default Profile_page;
