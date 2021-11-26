import React from "react";
import "./DateStatusAndAmount.css";

function DateStatusAndAmount({ dueDate, total, invoiceStatus }) {
  return (
    <div className="date-status-amount">
      <div className="date-amount-container">
        <p className="date-due">{`Due ${dueDate}`}</p>
        <p className="amount">{`$${total.toFixed(2)}`}</p>
      </div>
      <div className="status-container">
        <div className="circle-icon"></div>
        <p className="status-text">{invoiceStatus}</p>
      </div>
    </div>
  );
}

export default DateStatusAndAmount;
