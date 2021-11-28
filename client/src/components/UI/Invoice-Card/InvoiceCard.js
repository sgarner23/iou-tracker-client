import React, { useContext } from "react";
import { userContext } from "../../../store/userStore";
import DateStatusAndAmount from "./DateStatusAndAmount";
import InvoiceAndName from "./InvoiceAndName";
import "./InvoiceCard.css";

function InvoiceCard({
  number,
  invoiceStatus,
  dueDate,
  total,
  clientName,
  classes,
}) {
  const { state, dispatch } = useContext(userContext);
  return (
    <div className={`card-container ${classes}`}>
      <InvoiceAndName clientName={clientName} number={number} />
      <DateStatusAndAmount
        dueDate={dueDate}
        total={total}
        invoiceStatus={invoiceStatus}
      />
    </div>
  );
}

export default InvoiceCard;
