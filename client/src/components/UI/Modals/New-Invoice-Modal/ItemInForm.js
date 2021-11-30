import React, { useContext } from "react";
import { lineItemContext } from "../../../../store/lineItemStore";
import "./ItemInForm.css";
import icon_delete from "../../../../assets/icon_delete.svg";

function ItemInForm({ index }) {
  const { lineItemState, updateLineItem } = useContext(lineItemContext);

  function formChangeHandler(e) {
    updateLineItem({
      type: e.target.name,
      value: e.target.value,
      index,
    });
  }
  function deleteHandler() {
    updateLineItem({
      type: "DELETE_LINE",
      index,
    });
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
        value={lineItemState.lineItems[index].itemName}
        onChange={formChangeHandler}
      />
      <div className="quantity-price-container">
        <div className="qty-container">
          <label htmlFor="quantity" className="label bill-to-label item-label">
            Qty.
          </label>
          <input
            type="number"
            min="0"
            className="invoice-input bill-to-input qty-input"
            name="quantity"
            value={lineItemState.lineItems[index].quantity}
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
            value={lineItemState.lineItems[index].unitPrice}
            onChange={formChangeHandler}
          />
        </div>
        <div className="total-container">
          <div className="total-container-2">
            <p className="label bill-to-label">Total</p>
            <div className="total-display">
              {lineItemState.lineItems[index].subtotal}
            </div>
          </div>
          <img
            src={icon_delete}
            alt="trash can"
            onClick={deleteHandler}
            className="delete"
          />
        </div>
      </div>
    </div>
  );
}

export default ItemInForm;
