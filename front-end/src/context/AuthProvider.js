import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const userType = "standard";


    const [currentUser, setCurrentUser] = useState({
        _id: "dddddsdsdsds",
        username: "giorgio",
        userType: userType,
    });

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
