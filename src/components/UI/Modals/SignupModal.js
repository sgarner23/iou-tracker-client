import React, { useContext } from "react";
import { userContext } from "../../../store/userStore";
import LoginButton from "../LoginButton";
import "./SignupModal.css";

function SignupModal() {
  const { state, dispatch } = useContext(userContext);

  function clickHandler() {
    dispatch({
      type: "CLOSE_MODAL",
    });
  }

  return (
    <div className="overlay">
      <div className="card">
        <p className="success-message">
          Thanks! Your account has been created successfully!
        </p>
        <img
          src="https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif"
          alt="celebration"
          className="giphy"
        />
        <p className="login-instructions">
          You have been redirected to the login page. Please login to continue!
        </p>
        <LoginButton classes={"active smaller-btn"} onClick={clickHandler}>
          OK
        </LoginButton>
      </div>
    </div>
  );
}

export default SignupModal;
