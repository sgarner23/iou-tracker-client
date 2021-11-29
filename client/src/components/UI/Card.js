import React from "react";
import "./Card.css";

const Card = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};

export default Card;
