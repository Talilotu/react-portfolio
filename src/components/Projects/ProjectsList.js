import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <li className="list">
      <div>
        <h3>{props.name}</h3>
        <div>{props.photo}</div>
        <div>{props.url}</div>
        <div>{props.description}</div>
      </div>
    </li>
  );
};

export default Projects;
