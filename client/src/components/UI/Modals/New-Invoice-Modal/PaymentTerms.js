import React, { useContext, useState } from "react";
import { invoiceContext } from "../../../../store/invoiceStore";
import "./PaymentTerms.css";

function PaymentTerms() {
  const [purple, setPurple] = useState({
    1: false,
    7: false,
    14: false,
    30: false,
  });
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  function updatePaymentTerms(e) {
    updateInvoice({
      type: "UPDATE_PAYMENT_TERMS",
      displayMessage: e.target.textContent,
      numOfDays: +e.target.id,
    });
  }

  function clickHandler(e) {
    setPurple({
      1: false,
      7: false,
      14: false,
      30: false,
    });

    updatePaymentTerms(e);
    setPurple({
      [e.target.id]: true,
    });
  }
  return (
    <div className="payment-terms-box">
      <div className="net-box">
        <p
          onClick={clickHandler}
          id="1"
          className={purple[1] ? "net-text purple-text" : "net-text"}
        >
          Net 1 Day
        </p>
      </div>
      <div className="net-box">
        <p
          onClick={clickHandler}
          id="7"
          className={purple[7] ? "net-text purple-text" : "net-text"}
        >
          Net 7 Days
        </p>
      </div>
      <div className="net-box">
        <p
          onClick={clickHandler}
          id="14"
          className={purple[14] ? "net-text purple-text" : "net-text"}
        >
          Net 14 Days
        </p>
      </div>
      <div className="net-box">
        <p
          onClick={clickHandler}
          id="30"
          className={purple[30] ? "net-text purple-text" : "net-text"}
        >
          Net 30 Days
        </p>
      </div>
    </div>
  );
}

export default PaymentTerms;
