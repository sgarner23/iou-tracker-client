import React, { useContext } from "react";
import { invoiceContext } from "../../../../store/invoiceStore";
import "./BillTo.css";

function BillTo() {
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  function formChangeHandler(e) {
    updateInvoice({ type: e.target.name, value: e.target.value });
    console.log(invoiceState.clientCountry);
  }

  return (
    <React.Fragment>
      <p className="bill">Bill To</p>
      <div className="input-container">
        <label htmlFor="clientName" className="label bill-to-label">
          Client's Name
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input"
          name="clientName"
          onChange={formChangeHandler}
          value={
            invoiceState.selectedInvoice
              ? invoiceState.selectedInvoice.client_name
              : invoiceState.clientName
          }
        />
        <label htmlFor="client-email" className="label bill-to-label">
          Client's Email
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input"
          name="clientEmail"
          value={
            invoiceState.selectedInvoice
              ? invoiceState.selectedInvoice.client_email
              : invoiceState.clientEmail
          }
          onChange={formChangeHandler}
        />
        <label htmlFor="client-street" className="label bill-to-label">
          Street Address
        </label>
        <input
          type="text"
          className="invoice-input bill-to-input"
          name="clientStreetAddress"
          value={
            invoiceState.selectedInvoice
              ? invoiceState.selectedInvoice.client_street_address
              : invoiceState.clientStreetAddress
          }
          onChange={formChangeHandler}
        />
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="clientCity" className="label">
              City
            </label>
            <input
              type="text"
              name="clientCity"
              value={
                invoiceState.selectedInvoice
                  ? invoiceState.selectedInvoice.client_city
                  : invoiceState.clientCity
              }
              onChange={formChangeHandler}
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="clientState" className="label state-label">
              State
            </label>
            <input
              type="text"
              name="clientState"
              value={
                invoiceState.selectedInvoice
                  ? invoiceState.selectedInvoice.client_state
                  : invoiceState.clientState
              }
              onChange={formChangeHandler}
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
        <div className="city-state-container">
          <div className="container">
            <label htmlFor="clientZipCode" className="label">
              Zip Code
            </label>
            <input
              type="text"
              name="clientZipCode"
              value={
                invoiceState.selectedInvoice
                  ? invoiceState.selectedInvoice.client_zip
                  : invoiceState.clientZipCode
              }
              onChange={formChangeHandler}
              className="invoice-input city-state-input"
            />
          </div>
          <div className="container">
            <label htmlFor="clientCountry" className="label state-label">
              Country
            </label>
            <input
              type="text"
              name="clientCountry"
              value={
                invoiceState.selectedInvoice
                  ? invoiceState.selectedInvoice.client_country
                  : invoiceState.clientCountry
              }
              onChange={formChangeHandler}
              className="invoice-input city-state-input state-input"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BillTo;
