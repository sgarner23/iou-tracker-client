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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
