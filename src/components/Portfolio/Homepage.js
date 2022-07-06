import React from "react";
import Card from "../UI/Card";
import Transition from "./Transition";

import "./Homepage.css";

const Homepage = () => {
  return (
    <Card>
      <card className="top-section">
        <div className="row justify-content-start">
          <div className="col-4">
            <p>👋🏼 Hi, I am</p>
            <h1>Akanesi Tohotoa</h1>
            <Transition />
          </div>
          <div className="col-4">One of two columns</div>
        </div>
      </card>
    </Card>
  );
};

export default Homepage;
