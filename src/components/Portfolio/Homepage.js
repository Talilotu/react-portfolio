import React from "react";
import Card from "../UI/Card";
import "./Homepage.css";
import Animation from "./Animation";

const Homepage = () => {
  return (
    <Card>
      <card className="top-section">
        <Animation />
      </card>
    </Card>
  );
};

export default Homepage;
