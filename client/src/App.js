import React, { useContext, useEffect } from "react";
import { userContext } from "./store/userStore";
import { Navigate, useRoutes, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Invoice from "./pages/Invoice";
import persistUserLogin from "./helpers/getDataFromSession";

import "./App.css";

function App() {
  const { state, dispatch } = useContext(userContext);
  // const userInfo = persistUserLogin();
  // state.user = userInfo;
  // console.log(state);

  useEffect(() => {
    if (!state.user) {
      const userInfo = persistUserLogin();
      dispatch({ type: "USER_LOGGED_IN", value: userInfo });
    }
  }, []);
  if (!state.user) {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Routes>
        {/* list specific path routes here */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoice/:id" element={<Invoice />} />

        {/* catch all route (default to /profile if none of the above paths match) */}
        <Route path="*" element={<Navigate to="/profile" />} />
      </Routes>
    </React.Fragment>
  );

  // const routing = useRoutes([
  //   {
  //     path: "/",
  //     element: <Navigate replace to={state.user ? "/profile" : "/login"} />,
  //   },

  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },

  //   {
  //     path: "/profile",
  //     element: state.user ? <Profile /> : <Navigate replace to="/login" />,
  //   },

  //   {
  //     path: "/invoice/:id",
  //     element: state.user ? <Invoice /> : <Navigate replace to="/login" />,
  //   },
  // ]);

  // return <React.Fragment>{routing}</React.Fragment>;
}

export default App;
