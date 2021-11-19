import React from "react";
import "./DateStatusAndAmount.css";

function DateStatusAndAmount() {
  return (
    <div className="date-status-amount">
      <div className="date-amount-container">
        <p className="date-due">Due 19 Aug 2021</p>
        <p className="amount">$1,800.99</p>
      </div>
      <div className="status-container">
        <div className="circle-icon"></div>
        <p className="status-text">Paid</p>
      </div>
    </div>
  );
}

export default DateStatusAndAmount;
