import React from "react";
import Card from "../UI/Card";
import Certificates from "./Certificates";

import "./Training.css";

const Training = () => {
  return (
    <Card>
      <div className="training">
        <h1>Training & Skills </h1>
        <p>
          I have learned an enormous amount of front-end development and react
          technologies and skills from these online courses.
        </p>
        <h2>Courses</h2>
        <h3>SheCodes Coding Workshops</h3>
        <h4>View Certificates</h4>
        <Certificates />
        <h3>Udemy: React - The Complete Guide</h3>
        <h5>
          This full and advanced react course teaches me everything I need to
          know about react js.
        </h5>
      </div>
    </Card>
  );
};

export default Training;
