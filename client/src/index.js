import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserStore } from "./store/userStore";
import { BrowserRouter } from "react-router-dom";
import { InvoiceStore } from "./store/invoiceStore";
import { LineItemStore } from "./store/lineItemStore";

ReactDOM.render(
  <React.StrictMode>
    <UserStore>
      <InvoiceStore>
        <LineItemStore>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LineItemStore>
      </InvoiceStore>
    </UserStore>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
