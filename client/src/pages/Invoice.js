import React from "react";
import GoBack from "../components/GoBack";
import Header from "../components/Header";
import InvoiceFooter from "../components/InvoiceFooter";
import LineItemDetails from "../components/LineItemDetails";
import Card from "../components/UI/Card";
import LoginButton from "../components/UI/LoginButton";

import StatusDiv from "../components/UI/StatusDiv";
import "./Invoice.css";

function Invoice() {
  return (
    <React.Fragment>
      <Header />
      <div className="page-container">
        <div className="page-container-2">
          <GoBack />
          <Card classes={"card-wrapper lighter-shadow"}>
            <div className="status-wrapper">
              <p className="status-text-invoicepg">Status</p>
              <StatusDiv invoiceStatus={"Pending"} />
            </div>
          </Card>

          <Card classes={"card-wrapper lighter-shadow"}>
            <div className="invoice-content-container">
              <div className="invoice-description-container">
                <p className="invoice-num inline">
                  <span className="num-sign">#</span>IOU69
                </p>
                <p className="description-text lighter-text">Graphic Design</p>
              </div>
              <div className="address-container">
                <p className="lighter-text smaller-text address">
                  19 Union Terrace London E1 3EZ United Kingdom
                </p>
              </div>
              <div className="invoice-date-name-container">
                <div className="invoice-date-payment">
                  <p className="smaller-text lighter-text client-details">
                    Invoice Date
                  </p>
                  <p className="bigger-text darker-text">21 Aug 2021</p>
                  <p className="smaller-text lighter-text payment-due client-details">
                    Payment Due
                  </p>
                  <p className="bigger-text darker-text">20 Sep 2021</p>
                </div>
                <div className="client-name-address-container">
                  <p className="smaller-text lighter-text client-details">
                    Bill To
                  </p>
                  <p className="bigger-text darker-text">Alex Grim</p>
                  <p className="lighter-text smaller-text address address-pad">
                    84 Church Way Bradford BD1 9PB United Kingdom
                  </p>
                </div>
              </div>
              <div className="sent-to-container">
                <p className="lighter-text smaller-text">Sent to</p>
                <p className="bigger-text darker-text">alexgrim@mail.com</p>
              </div>
            </div>
            <LineItemDetails />
          </Card>
          <div className="margin-div"></div>
          <InvoiceFooter>
            <LoginButton classes={"invoice-footer-btn discard"}>
              Edit
            </LoginButton>
            <LoginButton classes={"invoice-footer-btn draft delete"}>
              Delete
            </LoginButton>
            <LoginButton classes={"active invoice-footer-btn mark-as-paid"}>
              Mark as Paid
            </LoginButton>
          </InvoiceFooter>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invoice;
