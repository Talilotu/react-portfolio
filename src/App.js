import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/UI/Navbar";
import Projects from "./components/Projects/Projects";
import Training from "./components/Training/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  if (loaded) {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/home">
              <Header />
              <Projects />
            </Route>
            <Route path="/training" exact>
              <Training />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  } else {
    return null;
  }
}

export default App;

// my-domain.com/training => Training Component
// my-domain.com/products => Products Component
