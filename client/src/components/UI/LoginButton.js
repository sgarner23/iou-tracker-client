import React from "react";
import "./LoginButton.css";

const LoginButton = ({ onSubmit, children, classes }) => {
  return <button className={classes}>{children}</button>;
};

export default LoginButton;
