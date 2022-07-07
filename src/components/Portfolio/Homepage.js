import React from "react";

import Card from "../UI/Card";
import Animation from "./Animation";

import "./Homepage.css";

const Homepage = () => {
  return (
    <Card>
      <div className="container homepage">
        <div className="row top-section">
          <div className="col-4">
            <Animation />
          </div>
          <div className="col-6">
            <h1>Hi, I am Akanesi Tohotoa</h1>
            <button>React Developer</button>{" "}
            <button>Front-end Developer</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Homepage;
