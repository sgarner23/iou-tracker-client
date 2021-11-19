import React from "react";
import { useContext } from "react";
import Header from "../components/Header";
import { userContext } from "../store/userStore";

function Profile() {
  const { state, dispatch } = useContext(userContext);

  return (
    <div className="profile-container">
      <Header />
    </div>
  );
}

export default Profile;
