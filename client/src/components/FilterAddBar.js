import React, { useContext } from "react";
import { userContext } from "../store/userStore";
import icon_arrow_down from "../assets/icon_arrow_down.svg";
import icon_plus from "../assets/icon_plus.svg";
import LoginButton from "./UI/LoginButton";
import Loader from "./UI/Loader";
import "./FilterAddBar.css";

function FilterAddBar() {
  const { state, dispatch } = useContext(userContext);

  function clickNewInvoiceHandler() {
    dispatch({ type: "NEW_INVOICE_MODAL" });
  }

  return (
    <div className="main-container">
      <div className="invoice-text-container">
        <p className="invoice-header">Invoices</p>
        <p className="invoice-text">
          {state.numOfUserInvoices
            ? `${state.numOfUserInvoices} invoices`
            : "Loading..."}
        </p>
      </div>
      <div className="dropdown-container">
        <p className="filter-text">Filter</p>
        <img
          src={icon_arrow_down}
          alt="arrow pointing down"
          className="arrow-down"
        />
      </div>
      <LoginButton
        onClick={clickNewInvoiceHandler}
        classes={"active smaller-btn"}
      >
        <div className="plus-circle">
          <img src={icon_plus} alt="plus icon" />
        </div>
        <p className="text"> New</p>
      </LoginButton>
    </div>
  );
}

export default FilterAddBar;
