import React from "react";
import "./LoginButton.css";

const LoginButton = ({ onSubmit, children, classes, onClick }) => {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoginButton;
