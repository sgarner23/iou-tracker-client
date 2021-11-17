import React, { useContext } from "react";
import { userContext } from "./store/userStore";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  const { state, dispatch } = useContext(userContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={state.user ? "/profile" : "/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
