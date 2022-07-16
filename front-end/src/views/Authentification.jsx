import React, { useState } from "react";
import { Login } from "../components/Auth/Login";
import { Register } from "../components/Auth/Register";

export const Authentification = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <div>
      {isLoginForm ? (
        <Login {...{ setIsLoginForm }} />
      ) : (
        <Register {...{ setIsLoginForm }} />
      )}
    </div>
  );
};
