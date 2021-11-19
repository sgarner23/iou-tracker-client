import React from "react";
import "./InvoiceAndName.css";

function InvoiceAndName() {
  return (
    <div className="invoice-name">
      <div className="left-container">
        <p className="num-sign">#</p>
        <p className="invoice-number">RT3080</p>
      </div>
      <p className="customer-name">Brent Freeman</p>
    </div>
  );
}

export default InvoiceAndName;
