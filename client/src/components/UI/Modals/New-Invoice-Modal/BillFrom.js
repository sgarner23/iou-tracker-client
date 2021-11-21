import React, { useContext } from "react";
import { invoiceContext } from "../../../../store/invoiceStore";
import "./BillFrom.css";

function BillFrom() {
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  function formChangeHandler(e) {
    updateInvoice({ type: e.target.name, value: e.target.value });
    console.log(
      invoiceState.userStreetAddress,
      invoiceState.userCity,
      invoiceState.userState,
      invoiceState.userZipCode,
      invoiceState.userCountry
    );
  }

  return (
    <React.Fragment>
      <p className="bill">Bill From</p>
      <div className="input-container">
        <label htmlFor="userStreetAddress" className="label">
          Street Address
        </label>
        <input
          type="text"
          name="userStreetAddress"
          className="invoice-input street-input"
          value={invoiceState.userStreetAddress}
          onChange={formChangeHandler}
        />
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="city" className="label">
              City
            </label>
            <input
              type="text"
              name="userCity"
              value={invoiceState.city}
              onChange={formChangeHandler}
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="state" className="label state-label">
              State
            </label>
            <input
              type="text"
              name="userState"
              value={invoiceState.userState}
              onChange={formChangeHandler}
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="city" className="label">
              Zip Code
            </label>
            <input
              type="text"
              name="userZipCode"
              value={invoiceState.userZipCode}
              onChange={formChangeHandler}
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="state" className="label state-label">
              Country
            </label>
            <input
              type="text"
              name="userCountry"
              value={invoiceState.userCountry}
              onChange={formChangeHandler}
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BillFrom;
