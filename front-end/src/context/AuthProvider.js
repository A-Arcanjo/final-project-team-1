import React, { createContext, useState } from "react";

export const AuthContext = createContext({});
const userType = "standard";
export const AuthProvider = ({ children }) => {


    const [currentUser, setCurrentUser] = useState({
        _id: null,
        username: null,
        userType: null,
    });

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
