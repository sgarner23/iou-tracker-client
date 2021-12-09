import React, { useContext } from "react";
import { invoiceContext } from "../../../store/invoiceStore";
import { userContext } from "../../../store/userStore";
import { useNavigate } from "react-router";
import LoginButton from "../LoginButton";
import invoiceDelete from "../../../api/deleteInvoice";
import "./DeleteModal.css";

function DeleteModal(selectedInvoiceID) {
  const { state, dispatch } = useContext(userContext);
  const { invoiceState, updateInvoice } = useContext(invoiceContext);
  const navigate = useNavigate();

  function cancelHandler() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  async function deleteHandler() {
    const deletedInvoice = await invoiceDelete(
      selectedInvoiceID.selectedInvoiceID
    );

    //Modal closed and user redirected to their profile once api call is finished
    if (deletedInvoice) {
      dispatch({ type: "CLOSE_MODAL" });
      navigate("/profile");
      updateInvoice({ type: "RESET" });
    }
  }
  return (
    <div className="invoice-overlay">
      <div className="delete-invoice-card">
        <div className="delete-content">
          <p className="confirm-header">Confirm Deletion</p>
          <p className="confirm-message">{`Are you sure you want to delete invoice #IOU${selectedInvoiceID.selectedInvoiceID}? This action cannot be undone.`}</p>
          <div className="button-container">
            <LoginButton
              onClick={cancelHandler}
              classes={"invoice-footer-btn discard"}
            >
              Cancel
            </LoginButton>
            <LoginButton
              onClick={deleteHandler}
              classes={"invoice-footer-btn draft delete"}
            >
              Delete
            </LoginButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
