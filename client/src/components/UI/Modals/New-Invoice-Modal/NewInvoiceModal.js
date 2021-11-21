import React from "react";
import "./NewInvoiceModal.css";
import icon_arrow_left from "../../../../assets/icon_arrow_left.svg";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceDetails from "./InvoiceDetails";
import ItemInForm from "./ItemInForm";
import InvoiceFooter from "../../../InvoiceFooter";
import LoginButton from "../../LoginButton";

function NewInvoiceModal() {
  return (
    <div className="invoice-overlay">
      <div className="invoice-card">
        <div className="content-container">
          <div className="go-back">
            <img
              src={icon_arrow_left}
              alt="left arrow"
              className="left-arrow"
            />
            <p className="go-back-text">Go back</p>
          </div>
          <p className="new-invoice-text">New Invoice</p>
          <BillFrom />
          <BillTo />
          <InvoiceDetails />
          <p className="item-list-header">Item List</p>
          <ItemInForm />
          <button className="add-item">+ Add New Item </button>
          <div className="gradient"></div>
          <div className="filler"></div>
          <InvoiceFooter>
            <LoginButton classes={"invoice-footer-btn discard"}>
              Discard
            </LoginButton>
            <LoginButton classes={"invoice-footer-btn draft"}>
              Save as Draft
            </LoginButton>
            <LoginButton classes={"active invoice-footer-btn"}>
              Save & Send
            </LoginButton>
          </InvoiceFooter>
        </div>
      </div>
    </div>
  );
}

export default NewInvoiceModal;
