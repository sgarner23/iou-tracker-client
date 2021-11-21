import React from "react";
import "./ItemInForm.css";
import icon_delete from "../../../../assets/icon_delete.svg";

function ItemInForm() {
  return (
    <div className="input-container">
      <label htmlFor="item-name" className="label bill-to-label">
        Item Name
      </label>
      <input
        type="text"
        className="invoice-input bill-to-input"
        name="item-name"
      />
      <div className="quanity-price-container">
        <div className="qty-container">
          <label htmlFor="quanity" className="label bill-to-label item-label">
            Qty.
          </label>
          <input
            type="number"
            min="0"
            className="invoice-input bill-to-input qty-input"
            name="quanity"
          />
        </div>
        <div className="price-container">
          <label htmlFor="price" className="label bill-to-label">
            Price
          </label>
          <input
            type="text"
            className="invoice-input bill-to-input"
            name="price"
          />
        </div>
        <div className="total-container">
          <div className="total-container-2">
            <p className="label bill-to-label">Total</p>
            <div className="total-display">156.00</div>
          </div>
          <img src={icon_delete} alt="trash can" className="delete" />
        </div>
      </div>
    </div>
  );
}

export default ItemInForm;
