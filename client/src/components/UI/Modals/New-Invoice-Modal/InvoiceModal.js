import React, { useContext } from "react";
import { userContext } from "../../../../store/userStore";
import { lineItemContext } from "../../../../store/lineItemStore";
import { invoiceContext } from "../../../../store/invoiceStore";
import "./InvoiceModal.css";

import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceDetails from "./InvoiceDetails";
import ItemInForm from "./ItemInForm";
import InvoiceFooter from "../../../InvoiceFooter";
import LoginButton from "../../LoginButton";
import createNewInvoice from "../../../../api/createInvoice";
import getUserInvoices from "../../../../api/getInvoices";
import GoBack from "../../../GoBack";

function InvoiceModal() {
  const { state, dispatch } = useContext(userContext);
  const { lineItemState, updateLineItem } = useContext(lineItemContext);
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  function newLineClickHandler() {
    updateLineItem({ type: "ADD_NEW_LINE" });
  }

  const listOfLineItems = lineItemState.lineItems.map((line, index) => {
    return <ItemInForm index={index} key={index} />;
  });

  async function submitInvoice(e) {
    let status = "Pending";
    if (e.target.textContent === "Discard") {
      dispatch({ type: "CLOSE_MODAL" });
      updateLineItem({ type: "RESET" });
      updateInvoice({ type: "RESET" });
      return;
    }
    if (e.target.textContent === "Save as Draft") {
      status = "Draft";
    }
    await createNewInvoice(invoiceState, lineItemState, status);
    updateLineItem({ type: "RESET" });
    updateInvoice({ type: "RESET" });
    dispatch({ type: "CLOSE_MODAL" });
  }

  return (
    <div className="invoice-overlay">
      <div className="invoice-card">
        <div className="content-container">
          <GoBack />
          <p className="new-invoice-text">New Invoice</p>
          <BillFrom />
          <BillTo />
          <InvoiceDetails />
          <p className="item-list-header">Item List</p>
          {listOfLineItems}
          <button onClick={newLineClickHandler} className="add-item">
            + Add New Item{" "}
          </button>
          <div className="gradient"></div>
          <div className="filler"></div>
          <InvoiceFooter>
            <LoginButton
              onClick={submitInvoice}
              classes={"invoice-footer-btn discard"}
            >
              Discard
            </LoginButton>
            <LoginButton
              onClick={submitInvoice}
              classes={"invoice-footer-btn draft"}
            >
              Save as Draft
            </LoginButton>
            <LoginButton
              onClick={submitInvoice}
              classes={"active invoice-footer-btn"}
            >
              Save & Send
            </LoginButton>
          </InvoiceFooter>
        </div>
      </div>
    </div>
  );
}

export default InvoiceModal;
