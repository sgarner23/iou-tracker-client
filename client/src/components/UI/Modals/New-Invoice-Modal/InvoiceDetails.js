import React from "react";

import icon_arrow_down from "../../../../assets/icon_arrow_down.svg";
import "./InvoiceDetails.css";

function InvoiceDetails() {
  return (
    <React.Fragment>
      <div className="input-container invoice-detail-container">
        <label htmlFor="invoice-date" className="label bill-to-label">
          Invoice Date
        </label>
        <input
          type="date"
          className="invoice-input bill-to-input date-input"
          name="client-name"
        />
        <label htmlFor="payment-terms" className="label bill-to-label">
          Payment Terms
        </label>
        <div
          className="invoice-input bill-to-input date-input select-dropdown"
          name="payment-terms"
        >
          Net 30 days
          <img
            src={icon_arrow_down}
            alt="down-arrow"
            className="invoice-down-arrow"
          />
        </div>
        <div className="payment-terms-box">
          <div className="net-box">
            <p className="net-text">Net 1 Day</p>
          </div>
          <div className="net-box">
            <p className="net-text">Net 7 Days</p>
          </div>
          <div className="net-box">
            <p className="net-text">Net 14 Days</p>
          </div>
          <div className="net-box">
            <p className="net-text">Net 30 Days</p>
          </div>
        </div>
        <label htmlFor="project-description" className="label bill-to-label">
          Project Description
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input date-input"
          name="project-description"
        />
      </div>
    </React.Fragment>
  );
}

export default InvoiceDetails;
