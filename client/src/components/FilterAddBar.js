import React, { useContext } from "react";
import { userContext } from "../store/userStore";
import icon_plus from "../assets/icon_plus.svg";
import LoginButton from "./UI/LoginButton";
import "./FilterAddBar.css";

function FilterAddBar({ loading }) {
  const { state, dispatch } = useContext(userContext);

  function clickNewInvoiceHandler() {
    dispatch({ type: "NEW_INVOICE_MODAL" });
  }

  //Determines invoice display message on profile page and shows loading status
  const numOfInvoices = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (!loading && state.numOfUserInvoices) {
      return <p>{state.numOfUserInvoices} invoices</p>;
    } else {
      return <p>No invoices</p>;
    }
  };

  return (
    <div className="main-container">
      <div className="invoice-text-container">
        <p className="invoice-header">Invoices</p>
        <div className="invoice-text">{numOfInvoices()}</div>
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
