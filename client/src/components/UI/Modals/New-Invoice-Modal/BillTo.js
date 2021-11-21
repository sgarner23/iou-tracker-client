import React from "react";
import "./BillTo.css";

function BillTo() {
  return (
    <React.Fragment>
      <p className="bill">Bill To</p>
      <div className="input-container">
        <label htmlFor="client-name" className="label bill-to-label">
          Client's Name
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input"
          name="client-name"
        />
        <label htmlFor="client-email" className="label bill-to-label">
          Client's Email
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input"
          name="client-email"
        />
        <label htmlFor="client-street" className="label bill-to-label">
          Street Address
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input"
          name="client-street"
        />
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="client-city" className="label">
              City
            </label>
            <input
              type="text"
              name="client-city"
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="client-state" className="label state-label">
              State
            </label>
            <input
              type="text"
              name="client-state"
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="client-zip" className="label">
              Zip Code
            </label>
            <input
              type="text"
              name="client-zip"
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="client-country" className="label state-label">
              Country
            </label>
            <input
              type="text"
              name="client-country"
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BillTo;
