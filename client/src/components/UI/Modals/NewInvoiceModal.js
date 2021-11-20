import React from "react";
import "./NewInvoiceModal.css";
import icon_arrow_left from "../../../assets/icon_arrow_left.svg";
import BillFrom from "../../BillFrom";

function NewInvoiceModal() {
  return (
    <div className="invoice-overlay">
      <div className="invoice-card">
        <div className="content-container">
          <div className="go-back">
            <img
              src={icon_arrow_left}
              alt="left arrow"
              className="left-arrow"
            />
            <p className="go-back-text">Go back</p>
          </div>
          <p className="new-invoice-text">New Invoice</p>
          <BillFrom />
        </div>
      </div>
    </div>
  );
}

export default NewInvoiceModal;
