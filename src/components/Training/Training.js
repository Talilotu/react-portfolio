import React from "react";
import Card from "../UI/Card";
import Certificates from "./Certificates";

import "./Training.css";

const Training = () => {
  return (
    <Card>
      <div className="training">
        <h1>Training and Skills </h1>
        <p>
          I have learned an enormous amount of front-end development and react
          js technologies and skills from these online courses.
        </p>
        <h2>Courses</h2>
        <div className="courses">
          <h3>SheCodes Coding Workshops</h3>
          <Certificates />
        </div>
        <div className="courses">
          <h3>Udemy: React - The Complete Guide</h3>
          <h5>
            This full react course teaches me everything I need to know about
            react js.
          </h5>
          <ul>
            <div className="row">
              <div className="col-lg-4">
                <li>React Hooks</li>
                <li>CSS Modules</li>
                <li>Rendering and Conditional Content</li>
                <li>Debugging</li>
                <li>Context API</li>
                <li>Class-based Components</li>
                <li>Send HTTP Requests</li>
                <li>Build custom hooks</li>
              </div>
              <div className="col-lg-4">
                <li>Redux</li>
                <li>React Router</li>
                <li>Next.js</li>
                <li>Animation</li>
                <li>TypeScript</li>
                <li>Unit Tests</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Training;
