import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ShopAll from "./components/ShopAll";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add a default route for Home */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop-all" element={<ShopAll />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
