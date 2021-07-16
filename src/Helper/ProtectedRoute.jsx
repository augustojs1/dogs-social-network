import React from "react";
import { UserContext } from "../UserContext";
import { Navigate, Route } from "react-router-dom";
import User from "../Components/User/User";

const ProtectedRoute = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route path="conta/*" element={<User />} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
