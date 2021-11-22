import React, { createContext, useReducer } from "react";

const initialState = {
  quanity: "",
  unitPrice: "",
  itemName: "",
  subtotal: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "itemName": {
      return {
        ...state,
        itemName: action.value,
      };
    }

    case "quanity": {
      return {
        ...state,
        quanity: +action.value,
        subtotal: +action.value * +state.unitPrice,
      };
    }

    case "unitPrice": {
      return {
        ...state,
        unitPrice: action.value,
        subtotal: +state.quanity * +action.value,
      };
    }

    default:
      return state;
  }
};

export const lineItemContext = createContext(initialState);

export const LineItemStore = ({ children }) => {
  const [lineItemState, updateLineItem] = useReducer(reducer, initialState);

  return (
    <lineItemContext.Provider value={{ lineItemState, updateLineItem }}>
      {children}
    </lineItemContext.Provider>
  );
};
