import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
  modalToDisplay: null,
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

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
