import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar";
import Projects from "./components/Projects/Projects";
import Training from "./components/Training/Training";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Training />
    </div>
  );
}

export default App;
