import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles.css";
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { SocialLinks } from "./pages/SocialLinks";
import { Map } from "./pages/Map";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>       
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social-links" element={<SocialLinks />} />
          <Route path="/map" element={<Map />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;