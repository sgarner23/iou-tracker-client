import React, { createContext, useReducer } from "react";

const initialState = {
  paymentTermOptions: false,
  userStreetAddress: "",
  userCity: "",
  userState: "",
  userZipCode: "",
  userCountry: "",
  clientName: "",
  clientEmail: "",
  clientStreetAddress: "",
  clientCity: "",
  clientState: "",
  clientZipCode: "",
  clientCountry: "",
  invoiceDate: "",
  displayMessage: "",
  numOfDays: "",
  projectDescription: "",
  currentInvoiceID: null,
  selectedInvoice: {},
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

    case "clientName": {
      return {
        ...state,
        clientName: action.value,
      };
    }

    case "clientEmail": {
      return {
        ...state,
        clientEmail: action.value,
      };
    }

    case "clientStreetAddress": {
      return {
        ...state,
        clientStreetAddress: action.value,
      };
    }

    case "clientCity": {
      return {
        ...state,
        clientCity: action.value,
      };
    }

    case "clientState": {
      return {
        ...state,
        clientState: action.value,
      };
    }

    case "clientZipCode": {
      return {
        ...state,
        clientZipCode: action.value,
      };
    }

    case "clientCountry": {
      return {
        ...state,
        clientCountry: action.value,
      };
    }

    case "invoiceDate": {
      console.log(action.value);
      return {
        ...state,
        invoiceDate: action.value,
      };
    }

    case "UPDATE_PAYMENT_TERMS": {
      return {
        ...state,
        displayMessage: action.displayMessage,
        numOfDays: action.numOfDays,
      };
    }

    case "projectDescription": {
      return {
        ...state,
        projectDescription: action.value,
      };
    }

    case "RESET": {
      return initialState;
    }

    case "INVOICE_ID": {
      return {
        ...state,
        currentInvoiceID: action.value,
      };
    }

    case "SELECTED_INVOICE": {
      return {
        ...state,
        selectedInvoice: action.value,
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
