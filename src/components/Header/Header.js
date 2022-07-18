import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import icon from "../../images/icon.jpg"
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div id="wrapper">
          <img src={icon} alt="icon" id="icon"></img>
          <div className="logo">MovieBox</div>
        </div>
      </Link>
    

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
