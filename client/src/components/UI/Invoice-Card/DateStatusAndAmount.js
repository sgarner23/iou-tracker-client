import React from "react";
import numberWithCommas from "../../../helpers/formatNumber";
import StatusDiv from "../StatusDiv";
import "./DateStatusAndAmount.css";

function DateStatusAndAmount({ dueDate, total, invoiceStatus }) {
  return (
    <div className="date-status-amount">
      <div className="date-amount-container">
        <p className="date-due">{`Due ${dueDate}`}</p>
        <p className="amount">{`$${numberWithCommas(total.toFixed(2))}`}</p>
      </div>
      <StatusDiv invoiceStatus={invoiceStatus} />
    </div>
  );
}

export default DateStatusAndAmount;
