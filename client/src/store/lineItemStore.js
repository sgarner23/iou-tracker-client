import React, { createContext, useReducer } from "react";

const initialState = {
  lineItems: [
    {
      quanity: "",
      unitPrice: "",
      itemName: "",
      subtotal: "",
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "itemName": {
      const arrOfLineItems = state.lineItems;
      arrOfLineItems[action.index].itemName = action.value;
      return {
        ...state,
        lineItems: arrOfLineItems,
      };
    }

    case "quanity": {
      const arrOfLineItems = state.lineItems;
      arrOfLineItems[action.index].quanity = action.value;
      const total =
        +arrOfLineItems[action.index].quanity *
        +arrOfLineItems[action.index].unitPrice;
      arrOfLineItems[action.index].subtotal = total.toFixed(2);
      return {
        ...state,
        arrOfLineItems,
      };
    }

    case "unitPrice": {
      const arrOfLineItems = state.lineItems;
      arrOfLineItems[action.index].unitPrice = action.value;
      const total =
        +arrOfLineItems[action.index].quanity *
        +arrOfLineItems[action.index].unitPrice;
      arrOfLineItems[action.index].subtotal = total.toFixed(2);
      return {
        ...state,
        arrOfLineItems,
      };
    }

    case "ADD_NEW_LINE": {
      const updatedLineItems = [
        ...state.lineItems,
        {
          quanity: "",
          unitPrice: "",
          itemName: "",
          subtotal: "",
        },
      ];
      return {
        ...state,
        lineItems: updatedLineItems,
      };
    }

    case "DELETE_LINE": {
      const updatedLineItems = [...state.lineItems];
      updatedLineItems.splice(action.index, 1);
      return {
        ...state,
        lineItems: updatedLineItems,
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
