import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
  usersInvoices: null,
  modalToDisplay: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      console.log("user logged in");
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

    case "CLOSE_MODAL": {
      return {
        ...state,
        modalToDisplay: null,
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
