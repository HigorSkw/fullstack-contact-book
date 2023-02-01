import { Navigate, Route, Routes } from "react-router";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<Navigate replace to={"home"} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
