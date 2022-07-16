import { useState } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { Modal } from "./components/Modal";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Authentification } from "./views/Authentification.jsx";
import { FoodDetail } from "./views/FoodDetail.jsx";
import { Foods } from "./views/Foods.jsx";
import Navbar from "./components/Navbar/NavBar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Rating from "./components/pages/Rating.jsx";
import Contact from "./components/pages/Contact.jsx";
import SignIn from "./components/pages/SignIn.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { Slideshow } from "./views/Slideshow.jsx";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex">
      <div className="container">
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/foods" />} />
          <Route
            path="/foods" //children
            element={<Foods setOpenModal={setOpenModal} />}
          />
          <Route path="/auth" element={<Authentification />} />
          <Route
            path="/foods/add"
            element={<ProtectedRoute children={<p>to be continued...</p>} />}
          />
          <Route
            path="/foods/:id"
            element={
              <ProtectedRoute
                setOpenModal={setOpenModal}
                children={<FoodDetail />}
              />
            }
          />
          <Route path="/slideshow" exact element={Slideshow} />
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
