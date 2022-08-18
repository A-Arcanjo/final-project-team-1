import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const userType = "standard";

    const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
        _id: null,
        username: null,
        userType: userType,
        token: null,
    };

    const [currentUser, setCurrentUser] = useState(loginSession);


    useEffect(() => {
        sessionStorage.setItem("login", JSON.stringify({ ...currentUser }));
    }, [currentUser]);


    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
