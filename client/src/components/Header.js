import React from "react";
import Stephen_Mia from "../assets/Stephen_Mia.jpeg";
import icon_moon from "../assets/icon_moon.svg";
import logo from "../assets/logo.svg";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-icon-container">
        <div className="background-div"></div>
        <div className="light-dark-container">
          <div className="dark-box"></div>
          <div className="light-box"></div>
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="middle-header-container">
        <div className="moon-sun-container">
          <img src={icon_moon} alt="moon sun dark theme" className="moon-sun" />
        </div>
      </div>
      <div className="profile-pic-container">
        <img
          src={Stephen_Mia}
          alt="profile picture"
          className="profile-picture"
        />
      </div>
    </div>
  );
}

export default Header;
