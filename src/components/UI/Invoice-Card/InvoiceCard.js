import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../../../store/userStore";
import { invoiceContext } from "../../../store/invoiceStore";
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
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  //Updates global state to "editing mode" and redirects user to that single invoice
  function invoiceClickHandler() {
    navigate(`/invoice/${number}`);
    updateInvoice({ type: "EDITING" });
  }

  return (
    <div onClick={invoiceClickHandler} className={`card-container ${classes}`}>
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
