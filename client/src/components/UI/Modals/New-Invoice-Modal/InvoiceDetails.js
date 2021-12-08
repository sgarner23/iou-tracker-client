import React, { useContext } from "react";
import { useParams } from "react-router";
import { invoiceContext } from "../../../../store/invoiceStore";
import icon_arrow_down from "../../../../assets/icon_arrow_down.svg";
import "./InvoiceDetails.css";
import PaymentTerms from "./PaymentTerms";

function InvoiceDetails() {
  const { invoiceState, updateInvoice } = useContext(invoiceContext);
  const { id } = useParams();

  let day = "";
  let currentOrderDate = [];

  if (invoiceState.selectedInvoice.order_date) {
    currentOrderDate = invoiceState.selectedInvoice.order_date.split("-");
  }

  //reformatting the date to meet required format, "yyyy-mm-dd"
  function formatDate(date) {
    if (!invoiceState.selectedInvoice.order_date) {
      return "";
    }
    for (let i = 0; i < date[2].length; i++) {
      if (i > 1) {
        break;
      }
      day += date[2].charAt(i);
    }
    date[2] = day;
    return (date = date.join("-"));
  }

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
          value={
            invoiceState.selectedInvoice.order_date &&
            formatDate(currentOrderDate)
          }
        />

        {id ? null : (
          <React.Fragment>
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
          </React.Fragment>
        )}
        <label htmlFor="project-description" className="label bill-to-label">
          Project Description
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input date-input"
          name="projectDescription"
          onChange={formChangeHandler}
          value={
            invoiceState.selectedInvoice
              ? invoiceState.selectedInvoice.project_type
              : invoiceState.projectDescription
          }
        />
      </div>
    </React.Fragment>
  );
}

export default InvoiceDetails;
