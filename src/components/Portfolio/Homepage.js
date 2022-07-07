import React, { useState } from "react";
import ListSkills from "./ListSkills";

import Card from "../UI/Card";
import Animation from "./Animation";

import "./Homepage.css";

const Homepage = () => {
  return (
    <Card>
      <div className="homepage">
        <div className="row container">
          <div className="col-6">
            <h1>Hi, I am Akanesi Tohotoa</h1>
            <p>Front-end Developer and React Developer, based in Australia</p>
            <button className="btn">Front-end Developer</button>{" "}
            <button className="btn">React Developer</button>
            <ListSkills />
          </div>
          <div className="col-4">
            <Animation />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Homepage;
