import React, { Fragment } from "react";
import LineItem from "./LineItem";
import "./LineItemDetails.css";

function LineItemDetails({ subtotal }) {
  return (
    <React.Fragment>
      <div className="line-item-container">
        <LineItem />
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
