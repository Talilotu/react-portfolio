import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar";
import Projects from "./components/Projects/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
