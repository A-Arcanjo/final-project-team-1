import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Services from "./components/pages/Services.js";
import Rating from "./components/pages/Rating.js";
import Contact from "./components/pages/Contact/Contact.js";
import Signin from "./components/pages/Signin/Signin.js";
import Signup from "./components/pages/Signup/Signup.js";
import CustomerSignup from "./components/pages/Signup/CustomerSignup.js";
import BusinessSignup from "./components/pages/Signup/BusinessSignup.js";
import Client from "./components/pages/Client/Client.js";
import Footer from "./components/Footer/Footer.js";
import './App.css';
import { Dashboard } from "./components/pages/Dashboard/HomeUser.jsx";
import { AuthContext } from "./context/AuthProvider.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Logout from "./components/Logout.jsx";


// const { currentUserId } = useContext(".....");
const userType = "standard";

// const currentUser = {
//   _id: "1234345ecxxxccxrfjef",
//   username: "sole",
//   userType: userType
// };



function App() {
  //const [currentUserId, setCurrentUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);


  const { currentUser, setCurrentUser } = useContext(AuthContext);

  // logout button
  const logout = () => {
    localStorage.removeItem("data");
    // setToken(false);
    setCurrentUser("");
    setIsLoggedIn(false);
    setShowLogin(true);

  };
  return (
    <div className="home">


      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={currentUser._id ? <Dashboard /> : <Home />} />
          {/* <Route path="/about" element={currentUser._id ? <Dashboard1 /> : <About />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer-signup" element={<CustomerSignup setCurrentUser={setCurrentUser} />} />
          <Route path="/business-signup" element={<BusinessSignup setCurrentUser={setCurrentUser} />} />
          <Route path="/profile" element={<ProtectedRoute auth={(currentUser._id != null)}>
            <Dashboard />
          </ProtectedRoute>} />
          <Route path="/logout" element={<Logout />} />

           <Route path="/client" element={<Client setCurrentUser={currentUser._id}/>} /> 
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;
