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
  editingInvoice: false,
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
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.user_street_address = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        userStreetAddress: action.value,
      };
    }

    case "userCity": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.user_city = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }

      return {
        ...state,
        userCity: action.value,
      };
    }

    case "userState": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.user_state = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        userState: action.value,
      };
    }

    case "userZipCode": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.user_zip = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        userZipCode: action.value,
      };
    }

    case "userCountry": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.user_country = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        userCountry: action.value,
      };
    }

    case "clientName": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_name = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientName: action.value,
      };
    }

    case "clientEmail": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_email = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientEmail: action.value,
      };
    }

    case "clientStreetAddress": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_street_address = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientStreetAddress: action.value,
      };
    }

    case "clientCity": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_city = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientCity: action.value,
      };
    }

    case "clientState": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_state = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientState: action.value,
      };
    }

    case "clientZipCode": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_zip = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientZipCode: action.value,
      };
    }

    case "clientCountry": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.client_country = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
      return {
        ...state,
        clientCountry: action.value,
      };
    }

    case "invoiceDate": {
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.order_date = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
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
      let editedInvoice = state.selectedInvoice;
      if (Object.keys(state.selectedInvoice).length) {
        editedInvoice.project_type = action.value;
        return {
          ...state,
          selectedInvoice: editedInvoice,
        };
      }
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

    case "EDITING": {
      return {
        ...state,
        editingInvoice: true,
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
