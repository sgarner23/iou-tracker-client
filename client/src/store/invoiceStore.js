import React, { createContext, useReducer } from "react";

const initialState = {
  paymentTermOptions: false,
  userStreetAddress: "",
  userCity: "",
  userState: "",
  userZipCode: "",
  userCountry: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PAYMENT_TERMS": {
      return {
        ...state,
        paymentTermOptions: !state.paymentTermOptions,
      };
    }

    case "userStreetAddress": {
      return {
        ...state,
        userStreetAddress: action.value,
      };
    }

    case "userCity": {
      return {
        ...state,
        userCity: action.value,
      };
    }

    case "userState": {
      return {
        ...state,
        userState: action.value,
      };
    }

    case "userZipCode": {
      return {
        ...state,
        userZipCode: action.value,
      };
    }

    case "userCountry": {
      return {
        ...state,
        userCountry: action.value,
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
