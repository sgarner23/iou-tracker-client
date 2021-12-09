import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
  usersInvoices: null,
  modalToDisplay: null,
  numOfUserInvoices: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return {
        ...state,
        user: action.value,
      };
    }

    case "USER_CREATED": {
      return {
        ...state,
        modalToDisplay: "userCreated",
      };
    }

    case "USERS_INVOICES": {
      return {
        ...state,
        usersInvoices: action.value,
      };
    }

    case "NEW_INVOICE_MODAL": {
      return {
        ...state,
        modalToDisplay: "newInvoice",
      };
    }

    case "EDIT_INVOICE_MODAL": {
      return {
        ...state,
        modalToDisplay: "editInvoice",
      };
    }

    case "DELETE_INVOICE_MODAL": {
      return {
        ...state,
        modalToDisplay: "deleteInvoice",
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        modalToDisplay: null,
      };
    }

    case "NUM_OF_INVOICES": {
      return {
        ...state,
        numOfUserInvoices: action.value,
      };
    }

    default:
      return state;
  }
};

export const userContext = createContext(initialState);

export const UserStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
