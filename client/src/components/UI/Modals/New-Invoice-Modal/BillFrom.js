import React from "react";
import "./BillFrom.css";

function BillFrom() {
  return (
    <React.Fragment>
      <p className="bill">Bill From</p>
      <div className="input-container">
        <label htmlFor="street-address" className="label">
          Street Address
        </label>
        <input
          type="text"
          name="street-address"
          className="invoice-input street-input"
        />
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="city" className="label">
              City
            </label>
            <input
              type="text"
              name="city"
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="state" className="label state-label">
              State
            </label>
            <input
              type="text"
              name="state"
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
              name="city"
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="state" className="label state-label">
              Country
            </label>
            <input
              type="text"
              name="state"
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BillFrom;
