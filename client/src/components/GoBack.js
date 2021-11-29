import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../store/userStore";
import "./GoBack.css";
import icon_arrow_left from "../assets/icon_arrow_left.svg";

function GoBack() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);

  function clickGoBack() {
    navigate("/profile");
    dispatch({ type: "CLOSE_MODAL" });
  }
  return (
    <div onClick={clickGoBack} className="go-back">
      <img src={icon_arrow_left} alt="left arrow" className="left-arrow" />
      <p className="go-back-text">Go back</p>
    </div>
  );
}

export default GoBack;
