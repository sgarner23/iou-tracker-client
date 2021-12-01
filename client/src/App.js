import React, { useContext, useEffect } from "react";
import { userContext } from "./store/userStore";
import {
  Navigate,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Invoice from "./pages/Invoice";
import persistUserLogin from "./helpers/getDataFromSession";

import "./App.css";

function App() {
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!state.user) {
      const userInfo = persistUserLogin();
      dispatch({ type: "USER_LOGGED_IN", value: userInfo });
      // if there is no user already stored in state, navigate them to the current pathname of the page they're on
      navigate(`${location.pathname}`);
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
        <Route path="/login" element={<Login />} />

        {/* catch all route (default to /profile if none of the above paths match) */}
        <Route path="*" element={<Navigate to="/profile" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
