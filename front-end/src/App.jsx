import { useState } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { Modal } from "./components/Modal";
import { Authentification } from "./views/Authentification.jsx";

import Navbar from "./components/Navbar/NavBar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Rating from "./components/pages/Rating.jsx";
import Contact from "./components/pages/Contact.jsx";
import SignIn from "./components/pages/SignIn.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { ComponentA } from "./views/Carousel.jsx";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex">
      <div className="container">
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/foods" />} />
          <Route path="/carousel" exact element={ComponentA} />
          <Route path="/auth" element={<Authentification />} />

          <Route path="/" exact element={Home} />
          <Route path="/about" element={About} />
          <Route path="/services" element={Services} />
          <Route path="/rating" element={Rating} />
          <Route path="/contact" element={Contact} />
          <Route path="/signIn" element={SignIn} />
          <Route path="*" element={<p>Ops!!! The page does not exist</p>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
