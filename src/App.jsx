import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Intro from "./components/intro/intro";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return <Fragment><Navbar /><Intro /></Fragment>;
};

export default App;