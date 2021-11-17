import React, { useState } from "react";

import Card from "../components/Card";
import LoginButton from "../components/LoginButton";
import LoginFormContainer from "../components/LoginFormContainer";

import "./Login.css";

const Login = () => {
  const [loginIsActive, setLoginIsActive] = useState(true);

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
      <Card>
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
