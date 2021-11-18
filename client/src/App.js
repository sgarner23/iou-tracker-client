import React, { useContext } from "react";
import { userContext } from "./store/userStore";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import persistUserLogin from "./helpers/getDataFromSession";

import "./App.css";

function App() {
  const { state, dispatch } = useContext(userContext);
  const userInfo = persistUserLogin();
  state.user = userInfo;

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
