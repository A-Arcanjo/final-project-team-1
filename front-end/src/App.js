import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js"
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About.js";
import Services from "./components/pages/Services.js";
import Rating from "./components/pages/Rating.js";
import Contact from "./components/pages/Contact.js";
import Signin from "./components/pages/Signin/Signin.js"
import Signup from "./components/pages/Signup/Signup.js";
import Client from "./components/pages/Client/Client.js";
import Footer from "./components/Footer/Footer.js";
import './App.css';


function App() {
  return (
    <div className="home">
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
    </div>
  );
}

export default App;
