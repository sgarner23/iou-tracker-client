import React, { useContext } from "react";
import { userContext } from "../../../store/userStore";
import DateStatusAndAmount from "./DateStatusAndAmount";
import InvoiceAndName from "./InvoiceAndName";
import "./InvoiceCard.css";

function InvoiceCard({ invoiceStatus, dueDate, total, clientName }) {
  const { state, dispatch } = useContext(userContext);
  return (
    <div className="card-container">
      <InvoiceAndName clientName={clientName} />
      <DateStatusAndAmount
        dueDate={dueDate}
        total={total}
        invoiceStatus={invoiceStatus}
      />
    </div>
  );
}

export default InvoiceCard;
