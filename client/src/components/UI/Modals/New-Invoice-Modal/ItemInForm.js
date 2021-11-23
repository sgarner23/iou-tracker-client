import React, { useContext } from "react";
import { lineItemContext } from "../../../../store/lineItemStore";
import "./ItemInForm.css";
import icon_delete from "../../../../assets/icon_delete.svg";

function ItemInForm({ itemName, quanity, unitPrice, subtotal, index }) {
  const { lineItemState, updateLineItem } = useContext(lineItemContext);

  function formChangeHandler(e) {
    updateLineItem({ type: e.target.name, index, value: e.target.value });
    console.log(lineItemState.quanity);
  }
  return (
    <div className="input-container">
      <label htmlFor="item-name" className="label bill-to-label">
        Item Name
      </label>
      <input
        type="text"
        className="invoice-input bill-to-input"
        name="itemName"
        value={lineItemState[index].itemName}
        onChange={formChangeHandler}
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
            value={lineItemState[index].quanity}
            onChange={formChangeHandler}
          />
        </div>
        <div className="price-container">
          <label htmlFor="price" className="label bill-to-label">
            Price
          </label>
          <input
            type="text"
            className="invoice-input bill-to-input"
            name="unitPrice"
            value={lineItemState[index].unitPrice}
            onChange={formChangeHandler}
          />
        </div>
        <div className="total-container">
          <div className="total-container-2">
            <p className="label bill-to-label">Total</p>
            <div className="total-display">{lineItemState[index].subtotal}</div>
          </div>
          <img src={icon_delete} alt="trash can" className="delete" />
        </div>
      </div>
    </div>
  );
}

export default ItemInForm;
