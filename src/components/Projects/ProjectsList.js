import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <li
      className="card projects-list"
      style={{ width: "22rem", height: "30rem" }}
    >
      <div className="card-img-top">{props.image}</div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href="https://shiny-pie-937396.netlify.app/" className="btn">
          See Project
        </a>
      </div>
    </li>
  );
};

export default Projects;
