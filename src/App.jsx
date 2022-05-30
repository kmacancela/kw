import { Fragment } from "react/cjs/react.production.min";
import React, { useState } from 'react';
import "./App.css";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import HowTo from "./components/HowTo/HowTo";

const App = () => {
  const [nav, setNav] = useState(0);

  return (
    <Fragment>
      <Navbar nav={nav} handleNav={setNav} />
      <Routes>
        <Route path="/" element={<Intro handleNav={setNav} />} />
        <Route path="/how-to" element={<HowTo handleNav={setNav} />} />
      </Routes>
    </Fragment>
  );
};

export default App;