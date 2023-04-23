import "./App.css";
import "./components/AboutUs";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";

import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import Donation from "./routes/Donation";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </div>
  );
}

