import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../store/userStore";
import { invoiceContext } from "../store/invoiceStore";
import "./GoBack.css";
import icon_arrow_left from "../assets/icon_arrow_left.svg";

function GoBack() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);
  const { invoiceState, updateInvoice } = useContext(invoiceContext);

  console.log(invoiceState.selectedInvoice);

  function clickGoBack() {
    if (state.modalToDisplay) {
      dispatch({ type: "CLOSE_MODAL" });
      return;
    } else {
      dispatch({ type: "CLOSE_MODAL" });
      navigate("/profile");
    }

    updateInvoice({ type: "RESET" });
  }
  return (
    <div onClick={clickGoBack} className="go-back">
      <img src={icon_arrow_left} alt="left arrow" className="left-arrow" />
      <p className="go-back-text">Go back</p>
    </div>
  );
}

export default GoBack;
