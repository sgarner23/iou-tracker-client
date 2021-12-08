import React, { useEffect, useContext, useState } from "react";
import { userContext } from "../store/userStore";
import { invoiceContext } from "../store/invoiceStore";
import GoBack from "../components/GoBack";
import Header from "../components/Header";
import InvoiceFooter from "../components/InvoiceFooter";
import LineItemDetails from "../components/LineItemDetails";
import Card from "../components/UI/Card";
import LoginButton from "../components/UI/LoginButton";
import { useParams, useNavigate } from "react-router";
import paid from "../api/markAsPaid";

import StatusDiv from "../components/UI/StatusDiv";
import "./Invoice.css";
import DeleteModal from "../components/UI/Modals/DeleteModal";
import InvoiceModal from "../components/UI/Modals/New-Invoice-Modal/InvoiceModal";

function Invoice() {
  const { state, dispatch } = useContext(userContext);
  const { invoiceState, updateInvoice } = useContext(invoiceContext);
  const [orderDate, setOrderDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  state.usersInvoices.forEach((invoice) => {
    if (invoice.id === +id && invoiceState.selectedInvoice.id !== +id) {
      updateInvoice({ type: "SELECTED_INVOICE", value: invoice });
    }
  });

  function markAsPaidHandler() {
    paid(invoiceState.selectedInvoice.id);
    navigate("./profile");
  }

  function deleteHandler() {
    dispatch({ type: "DELETE_INVOICE_MODAL" });
  }

  function editHandler() {
    dispatch({ type: "EDIT_INVOICE_MODAL" });
  }

  function formatDate(date) {
    const invoiceDate = new Date(date);
    let dateMiliSecs = Date.parse(invoiceDate);
    let formattedDate = new Date(dateMiliSecs).toDateString();
    let dateArr = formattedDate.split(" ");
    const newDateArr = [dateArr[2], dateArr[1], dateArr[3]];
    return newDateArr.join(" ");
  }

  useEffect(() => {
    const invoiceDate = formatDate(invoiceState.selectedInvoice.order_date);
    setOrderDate(invoiceDate);
    updateInvoice({ type: "INVOICE_ID", value: id });
  }, [invoiceState.selectedInvoice.order_date]);

  return (
    <React.Fragment>
      {state.modalToDisplay === "deleteInvoice" && (
        <DeleteModal selectedInvoiceID={invoiceState.selectedInvoice.id} />
      )}

      {state.modalToDisplay === "editInvoice" && <InvoiceModal />}
      <Header />
      <div className="page-container">
        <div className="page-container-2">
          <GoBack />
          <Card classes={"card-wrapper lighter-shadow"}>
            <div className="status-wrapper">
              <p className="status-text-invoicepg">Status</p>
              <StatusDiv invoiceStatus={invoiceState.selectedInvoice.is_paid} />
            </div>
          </Card>

          <Card classes={"card-wrapper lighter-shadow"}>
            <div className="invoice-content-container">
              <div className="invoice-description-container">
                <p className="invoice-num inline">
                  <span className="num-sign">#</span>
                  {`IOU${invoiceState.selectedInvoice.id}`}
                </p>
                <p className="description-text lighter-text">
                  {invoiceState.selectedInvoice.project_type}
                </p>
              </div>
              <div className="address-container">
                <p className="lighter-text smaller-text address">
                  {invoiceState.selectedInvoice.user_street_address}
                </p>
                <p className="lighter-text smaller-text address">
                  {`${invoiceState.selectedInvoice.user_city} ${invoiceState.selectedInvoice.user_state} ${invoiceState.selectedInvoice.user_zip}`}
                </p>
                <p className="lighter-text smaller-text address">
                  {`${invoiceState.selectedInvoice.user_country}`}
                </p>
              </div>
              <div className="invoice-date-name-container">
                <div className="invoice-date-payment">
                  <p className="smaller-text lighter-text client-details">
                    Invoice Date
                  </p>
                  <p className="bigger-text darker-text">{orderDate}</p>
                  <p className="smaller-text lighter-text payment-due client-details">
                    Payment Due
                  </p>
                  <p className="bigger-text darker-text">
                    {invoiceState.selectedInvoice.payment_date}
                  </p>
                </div>
                <div className="client-name-address-container">
                  <p className="smaller-text lighter-text client-details">
                    Bill To
                  </p>
                  <p className="bigger-text darker-text">
                    {invoiceState.selectedInvoice.client_name}
                  </p>
                  <p className="lighter-text smaller-text address-pad address ">
                    {invoiceState.selectedInvoice.client_street_address}
                  </p>
                  <p className="lighter-text smaller-text address">
                    {`${invoiceState.selectedInvoice.client_city} ${invoiceState.selectedInvoice.client_state} ${invoiceState.selectedInvoice.client_zip} ${invoiceState.selectedInvoice.client_country}`}
                  </p>
                </div>
              </div>
              <div className="sent-to-container">
                <p className="lighter-text smaller-text">Sent to</p>
                <p className="bigger-text darker-text">
                  {invoiceState.selectedInvoice.client_email}
                </p>
              </div>
            </div>
            <LineItemDetails subtotal={invoiceState.selectedInvoice.subtotal} />
          </Card>
          <div className="margin-div"></div>
          <InvoiceFooter>
            <LoginButton
              onClick={editHandler}
              classes={"invoice-footer-btn discard"}
            >
              Edit
            </LoginButton>
            <LoginButton
              onClick={deleteHandler}
              classes={"invoice-footer-btn draft delete"}
            >
              Delete
            </LoginButton>
            <LoginButton
              onClick={markAsPaidHandler}
              classes={"active invoice-footer-btn mark-as-paid"}
            >
              Mark as Paid
            </LoginButton>
          </InvoiceFooter>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invoice;
