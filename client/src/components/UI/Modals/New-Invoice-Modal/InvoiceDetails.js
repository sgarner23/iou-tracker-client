import React, { useContext } from "react";
import { invoiceContext } from "../../../../store/invoiceStore";
import icon_arrow_down from "../../../../assets/icon_arrow_down.svg";
import "./InvoiceDetails.css";
import PaymentTerms from "./PaymentTerms";

function InvoiceDetails() {
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  function clickPaymentTermsHandler() {
    updateInvoice({ type: "SELECT_PAYMENT_TERMS" });
  }

  function formChangeHandler(e) {
    updateInvoice({ type: e.target.name, value: e.target.value });
  }

  return (
    <React.Fragment>
      <div className="input-container invoice-detail-container">
        <label htmlFor="invoice-date" className="label bill-to-label">
          Invoice Date
        </label>
        <input
          type="date"
          className="invoice-input bill-to-input date-input"
          name="invoiceDate"
          onChange={formChangeHandler}
        />
        <label htmlFor="payment-terms" className="label bill-to-label">
          Payment Terms
        </label>
        <div
          className="invoice-input bill-to-input date-input select-dropdown"
          name="payment-terms"
        >
          {invoiceState.displayMessage}
          <img
            src={icon_arrow_down}
            alt="down-arrow"
            className="invoice-down-arrow"
            onClick={clickPaymentTermsHandler}
          />
        </div>
        {invoiceState.paymentTermOptions && <PaymentTerms />}
        <label htmlFor="project-description" className="label bill-to-label">
          Project Description
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input date-input"
          name="projectDescription"
          onChange={formChangeHandler}
          value={invoiceState.projectDescription}
        />
      </div>
    </React.Fragment>
  );
}

export default InvoiceDetails;
