import React from "react";
import "./LoginInput.css";

const LoginInput = (props) => {
  return <input {...props} className={props.classes} />;
};

export default LoginInput;
