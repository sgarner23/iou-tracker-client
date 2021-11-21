import React from "react";
import "./PaymentTerms.css";

function PaymentTerms() {
  return (
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
  );
}

export default PaymentTerms;
