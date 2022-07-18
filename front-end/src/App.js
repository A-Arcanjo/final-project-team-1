import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js"
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Services from "./components/pages/Services.js";
import Rating from "./components/pages/Rating.js";
import Contact from "./components/pages/Contact.js";
import Signin from "./components/pages/Signin.js";
import Signup from "./components/pages/Signup/Signup.js";
import Client from "./components/pages/Client/Client.js";
import Footer from "./components/Footer/Footer.js";
import './App.css';


function App() {
  return (
    <div className="home">
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/rating" component={Rating} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/client" component={Client} />
        </Switch>
        </div>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
