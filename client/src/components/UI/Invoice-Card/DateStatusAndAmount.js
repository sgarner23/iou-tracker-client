import React from "react";
import numberWithCommas from "../../../helpers/formatNumber";
import "./DateStatusAndAmount.css";

function DateStatusAndAmount({ dueDate, total, invoiceStatus }) {
  return (
    <div className="date-status-amount">
      <div className="date-amount-container">
        <p className="date-due">{`Due ${dueDate}`}</p>
        <p className="amount">{`$${numberWithCommas(total.toFixed(2))}`}</p>
      </div>
      <div className={`status-container ${invoiceStatus}-container`}>
        <div className={`circle-icon ${invoiceStatus}-circle`}></div>
        <p className={`status-text ${invoiceStatus}-text`}>{invoiceStatus}</p>
      </div>
    </div>
  );
}

export default DateStatusAndAmount;
