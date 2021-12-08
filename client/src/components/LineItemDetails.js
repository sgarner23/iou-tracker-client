import React, { Fragment, useContext, useState, useEffect } from "react";
import { invoiceContext } from "../store/invoiceStore";
import LineItem from "./LineItem";
import "./LineItemDetails.css";
import numberWithCommas from "../helpers/formatNumber";
import getLineItems from "../api/getLineItem";

function LineItemDetails() {
  const { invoiceState, updateInvoice } = useContext(invoiceContext);
  const [lineItemsList, setLineItemsList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  //The useEffects below are to update line items and formatting after the component mounts
  useEffect(() => {
    if (invoiceState.currentInvoiceID) {
      const lineItems = getLineItems(invoiceState.currentInvoiceID);
      lineItems.then((res) => {
        setLineItemsList(res.lineItems);
      });
    }
  }, [invoiceState.currentInvoiceID]);

  useEffect(() => {
    if (invoiceState.selectedInvoice.subtotal) {
      setSubtotal(numberWithCommas(invoiceState.selectedInvoice.subtotal));
    }
  }, [invoiceState.selectedInvoice.subtotal]);

  return (
    <React.Fragment>
      <div className="line-item-container">
        {lineItemsList.map((line, index) => {
          return (
            <LineItem
              key={index}
              itemName={line.item_name}
              quantity={line.quantity}
              unitPrice={line.unit_price}
              subtotal={line.subtotal}
            />
          );
        })}
      </div>
      <div className="grand-total-wrapper">
        <div className="grand-total">
          <p className="grand-total-text">Grand Total</p>
          <p className="total-price">$ {subtotal}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LineItemDetails;
