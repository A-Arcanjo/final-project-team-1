import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    id: null,
    token: null,
    email: null,
  });

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
