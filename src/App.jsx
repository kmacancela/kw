import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HowTo from "./components/HowTo/HowTo";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/how-to" element={<HowTo />} />
      </Routes>
    </Fragment>
  );
};

export default App;