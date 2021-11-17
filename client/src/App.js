import React, { useContext } from "react";
import { userContext } from "./store/userStore";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  const { state, dispatch } = useContext(userContext);
  console.log(state.user);
  // sessionStorage.getItem(accessToken)
  // sessionStorage.getItem(user)

  const routing = useRoutes([
    {
      path: "/",
      element: <Navigate replace to={state.user ? "/profile" : "/login"} />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/profile",
      element: state.user ? <Profile /> : <Navigate replace to="/login" />,
    },
  ]);

  return <React.Fragment>{routing}</React.Fragment>;
}

export default App;
