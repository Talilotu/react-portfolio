import React from "react";
import Card from "../UI/Card";
import "./Homepage.css";
import Animation from "./Animation";

const Homepage = () => {
  return (
    <Card>
      <card className="container homepage">
        <div className="row top-section">
          <div className="col-4">
            <Animation />
          </div>
          <div className="col-6">
            <h1>Hi, I am Akanesi Tohotoa</h1>
            <p>React Developer, Front-end Developer</p>
          </div>
        </div>
      </card>
    </Card>
  );
};

export default Homepage;
