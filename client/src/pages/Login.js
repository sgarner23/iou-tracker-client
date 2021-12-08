import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../store/userStore";

import Card from "../components/UI/Card";
import LoginButton from "../components/UI/LoginButton";
import LoginFormContainer from "../components/LoginFormContainer";

import "./Login.css";
import SignupModal from "../components/UI/Modals/SignupModal";

const Login = () => {
  const { state, dispatch } = useContext(userContext);
  const [loginIsActive, setLoginIsActive] = useState(true);

  //Displaying the login or sign up form based on which button is clicked
  function clickHandler(e) {
    if (e.target.textContent === "Login" && !loginIsActive) {
      setLoginIsActive(true);
    } else if (
      e.target.textContent === "Signup" ||
      e.target.textContent === "Signup now"
    ) {
      setLoginIsActive(false);
    }
  }

  return (
    <div className="login-page">
      <Card classes={"card-wrapper"}>
        {state.modalToDisplay === "userCreated" && <SignupModal />}
        <h1>{loginIsActive ? "Login Form" : "Signup Form"}</h1>
        <div className="login-btns-container">
          <div className="btn-container" onClick={clickHandler}>
            <LoginButton classes={loginIsActive ? "active" : "not-active"}>
              Login
            </LoginButton>
          </div>
          <div className="btn-container" onClick={clickHandler}>
            <LoginButton classes={loginIsActive ? "not-active" : "active"}>
              Signup
            </LoginButton>
          </div>
        </div>
        <LoginFormContainer
          loginIsActive={loginIsActive}
          setLoginIsActive={setLoginIsActive}
        />
        <div className="bottom-text">
          <p>Not a member?</p>{" "}
          <p className="signup-text" onClick={clickHandler}>
            Signup now
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
