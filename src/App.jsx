import { Fragment } from "react/cjs/react.production.min";
import React, { useState } from 'react';
import "./App.css";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HowTo from "./components/HowTo/HowTo";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

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
      </Routes>
    </Fragment>
  );
};

export default App;