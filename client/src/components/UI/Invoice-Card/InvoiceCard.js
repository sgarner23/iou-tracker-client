import React from "react";
import DateStatusAndAmount from "./DateStatusAndAmount";
import InvoiceAndName from "./InvoiceAndName";
import "./InvoiceCard.css";

function InvoiceCard() {
  return (
    <div className="card-container">
      <InvoiceAndName />
      <DateStatusAndAmount />
    </div>
  );
}

export default InvoiceCard;
