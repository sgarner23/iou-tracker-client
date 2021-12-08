import React, { useState } from "react";
import { useNavigate } from "react-router";
import avatar from "../assets/avatar.svg";
import logo from "../assets/logo.svg";
import "./Header.css";

function Header() {
  const [showLogoutBox, setShowLogoutBox] = useState(false);
  const navigate = useNavigate();

  function displayLogoutBox() {
    setShowLogoutBox(!showLogoutBox);
  }

  function logoutUser() {
    window.sessionStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("userData");
    navigate("/login");
  }
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

      <div className="middle-header-container"></div>
      <div onClick={displayLogoutBox} className="profile-pic-container">
        <img src={avatar} alt="profile picture" className="profile-picture" />
        {showLogoutBox && (
          <div className="logout-container">
            <p onClick={logoutUser} className="logout-text">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
