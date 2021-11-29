import React, { useContext } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);

  function invoiceClickHandler() {
    navigate(`/invoice/${number}`);
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
