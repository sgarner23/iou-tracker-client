import React, { createContext, useReducer } from "react";

const initialState = {
  paymentTermOptions: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PAYMENT_TERMS": {
      return {
        ...state,
        paymentTermOptions: !state.paymentTermOptions,
      };
    }
    default:
      return state;
  }
};

export const invoiceContext = createContext(initialState);

export const InvoiceStore = ({ children }) => {
  const [invoiceState, updateInvoice] = useReducer(reducer, initialState);

  return (
    <invoiceContext.Provider value={{ invoiceState, updateInvoice }}>
      {children}
    </invoiceContext.Provider>
  );
};
