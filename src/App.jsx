import { Fragment } from "react";
import React, { useState } from 'react';
import "./App.css";
import "./stylesheets/index.scss";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HowTo from "./components/HowTo/HowTo";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Showroom from "./components/Showroom/Showroom";

const App = () => {
  const [nav, setNav] = useState(0);

  return (
    <Fragment>
      <Navbar nav={nav} handleNav={setNav} />
      <Routes>
        <Route path="/" element={<Intro handleNav={setNav} />} />
        <Route path="/how-to" element={<HowTo handleNav={setNav} />} />
        <Route path="/contact" element={<Contact handleNav={setNav} />} />
        <Route path="/about" element={<About />} />
        <Route path="/showroom" element={<Showroom />} />
      </Routes>
    </Fragment>
  );
};

export default App;