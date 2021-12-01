import React, { Fragment, useContext, useState, useEffect } from "react";
import { invoiceContext } from "../store/invoiceStore";
import LineItem from "./LineItem";
import "./LineItemDetails.css";
import numberWithCommas from "../helpers/formatNumber";
import getLineItems from "../api/getLineItem";

function LineItemDetails({ subtotal }) {
  const { invoiceState, updateInvoice } = useContext(invoiceContext);
  const [lineItemsList, setLineItemsList] = useState([]);

  useEffect(() => {
    if (invoiceState.currentInvoiceID) {
      console.log("I AM THE USEEFFECT!");
      const lineItems = getLineItems(invoiceState.currentInvoiceID);
      lineItems.then((res) => {
        console.log(res);
        setLineItemsList(res.lineItems);
      });
    }
  }, [invoiceState.currentInvoiceID]);

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
          <p className="total-price">$ {numberWithCommas(subtotal)}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LineItemDetails;
