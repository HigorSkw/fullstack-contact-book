import { Navigate, Route, Routes } from "react-router";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/DashBoard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/*" element={<Navigate replace to={"Login"} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
