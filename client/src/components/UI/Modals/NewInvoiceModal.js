import React from "react";
import "./NewInvoiceModal.css";
import icon_arrow_left from "../../../assets/icon_arrow_left.svg";

function NewInvoiceModal() {
  return (
    <div className="overlay">
      <div className="card">
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
        </div>
      </div>
    </div>
  );
}

export default NewInvoiceModal;
