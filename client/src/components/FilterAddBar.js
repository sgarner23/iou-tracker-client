import React from "react";
import icon_arrow_down from "../assets/icon_arrow_down.svg";
import icon_plus from "../assets/icon_plus.svg";
import LoginButton from "./UI/LoginButton";
import "./FilterAddBar.css";

function FilterAddBar() {
  return (
    <div className="main-container">
      <div className="invoice-text-container">
        <p className="invoice-header">Invoices</p>
        <p className="invoice-text">7 invoices</p>
      </div>
      <div className="dropdown-container">
        <p className="filter-text">Filter</p>
        <img
          src={icon_arrow_down}
          alt="arrow pointing down"
          className="arrow-down"
        />
      </div>
      <LoginButton classes={"active smaller-btn"}>
        <div className="plus-circle">
          <img src={icon_plus} alt="plus icon" />
        </div>
        <p className="text"> New</p>
      </LoginButton>
    </div>
  );
}

export default FilterAddBar;
