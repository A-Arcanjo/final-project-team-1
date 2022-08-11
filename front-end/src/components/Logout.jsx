import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.js";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const userType = "standard";
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    async function _logout() {
      setCurrentUser({
        _id: null,
        username: null,
        userType: userType,
      });
      navigate("/signin");
    }

    setTimeout(() => {
      _logout();
    }, 500);
  }, []);

  return <div>You are currently being logged out....</div>;
}
