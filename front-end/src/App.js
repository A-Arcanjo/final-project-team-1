import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About.js";
import Services from "./components/pages/Services.js";
import Rating from "./components/pages/Rating.js";
<<<<<<< HEAD
import Contact from "./components/pages/Contact/Contact.js";
import Signin from "./components/pages/Signin/Signin.js"
=======
import Contact from "./components/pages/Contact.js";
import Signin from "./components/pages/Signin/Signin.js";
>>>>>>> e4e86132a39c79cbaeb89b48b728fcd4eae33481
import Signup from "./components/pages/Signup/Signup.js";
import CustomerSignup from "./components/pages/Signup/CustomerSignup.js";
import BusinessSignup from "./components/pages/Signup/BusinessSignup.js";
import Client from "./components/pages/Client/Client.js";
import Footer from "./components/Footer/Footer.js";
import './App.css';


function App() {
  return (
    <div className="home">
<<<<<<< HEAD
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/rating" element={<Rating />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/customer-signup" element={<CustomerSignup />} />
                <Route path="/business-signup" element={<BusinessSignup />} />
                <Route path="/client" element={<Client />} />
            </Routes>
        </div>
    <Footer />
=======
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </div>
      <Footer />
>>>>>>> e4e86132a39c79cbaeb89b48b728fcd4eae33481
    </div>
  );
}

export default App;
