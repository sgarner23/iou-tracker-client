import React from "react";
import "./LineItem.css";

function LineItem() {
  return (
    <div className="description-wrapper">
      <div className="quanity-and-unitprice">
        <p className="design-title">Banner Design</p>
        <p className="units-price">2 x $200.00</p>
      </div>
      <p className="design-title">$400.00</p>
    </div>
  );
}

export default LineItem;
