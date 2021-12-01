import React from "react";
import "./StatusDiv.css";

function StatusDiv({ invoiceStatus }) {
  return (
    <React.Fragment>
      <div className={`status-container ${invoiceStatus}-container`}>
        <div className={`circle-icon ${invoiceStatus}-circle`}></div>
        <p className={`status-text ${invoiceStatus}-text`}>{invoiceStatus}</p>
      </div>
    </React.Fragment>
  );
}

export default StatusDiv;
