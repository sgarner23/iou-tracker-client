import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import { userContext } from "../store/userStore";
import FilterAddBar from "../components/FilterAddBar";
import "./Profile.css";
import InvoiceCard from "../components/UI/Invoice-Card/InvoiceCard";

function Profile() {
  const { state, dispatch } = useContext(userContext);

  return (
    <div className="profile-container">
      <Header />
      <FilterAddBar />
      <InvoiceCard />
    </div>
  );
}

export default Profile;
