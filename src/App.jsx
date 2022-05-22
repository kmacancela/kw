import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return <Fragment><Navbar /><Intro /></Fragment>;
};

export default App;