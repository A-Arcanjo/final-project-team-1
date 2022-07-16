import React, { useContext } from "react";

import { AuthContext } from "../context/AuthProvider";

export const ProtectedRoute = ({ children, setOpenModal }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser.token) {
    return <div>{children}</div>;
  }
  return setOpenModal(true);
};
