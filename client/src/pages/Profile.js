import React from "react";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { userContext } from "../store/userStore";
import FilterAddBar from "../components/FilterAddBar";
import "./Profile.css";
import InvoiceCard from "../components/UI/Invoice-Card/InvoiceCard";
import NewInvoiceModal from "../components/UI/Modals/New-Invoice-Modal/NewInvoiceModal";
import getUserInvoices from "../api/getInvoices";
import illustration_empty from "../assets/illustration_empty.svg";

function Profile() {
  const { state, dispatch } = useContext(userContext);
  const [noInvoices, setNoInvoices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [invoiceListState, setInvoiceListState] = useState([]);

  useEffect(() => {
    if (state.user) {
      const allInvoices = getUserInvoices();
      allInvoices.then((res) => {
        if (res && res.userInvoices && res.userInvoices.length > 0) {
          dispatch({ type: "USERS_INVOICES", value: res.userInvoices });
          dispatch({ type: "NUM_OF_INVOICES", value: res.userInvoices.length });
          setNoInvoices(false);
          setInvoiceListState(
            res.userInvoices.map((invoice, index) => {
              return (
                <InvoiceCard
                  key={index}
                  classes={index % 2 === 0 ? "left" : "right"}
                  number={invoice.id}
                  invoiceStatus={invoice.is_paid}
                  dueDate={invoice.payment_date}
                  total={invoice.subtotal}
                  clientName={invoice.client_name}
                />
              );
            })
          );
        } else {
          setNoInvoices(true);
        }
      });
    }
    setLoading(false);
  }, [state.modalToDisplay]);

  return (
    <div className="profile-container">
      {state.modalToDisplay && <NewInvoiceModal />}
      <Header />
      <FilterAddBar loading={loading} />
      {noInvoices ? (
        <div className="image-wrapper">
          <img src={illustration_empty} alt="no invoices image" />
          <p className="nothing-here">This is nothing here</p>
          <p className="instructions">
            Create a new invoice by clicking the{" "}
            <span id="new-invoice-text">&nbsp;New Invoice</span>&nbsp;button and
            get started
          </p>
        </div>
      ) : invoiceListState ? (
        invoiceListState
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Profile;
