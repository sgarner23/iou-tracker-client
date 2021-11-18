import React from "react";
import { useContext } from "react";
import { userContext } from "../store/userStore";

function Profile() {
  const { state, dispatch } = useContext(userContext);
  console.log(state.user);
  return <div>I am the profile.</div>;
}

export default Profile;
