import React from "react";
import "./LineItem.css";

function LineItem({ itemName, quantity, unitPrice, subtotal }) {
  return (
    <div className="description-wrapper">
      <div className="quantity-and-unitprice">
        <p className="design-title">{itemName}</p>
        <p className="units-price">{`${quantity} x $${unitPrice}`}</p>
      </div>
      <p className="design-title">{`$${subtotal}`}</p>
    </div>
  );
}

export default LineItem;
