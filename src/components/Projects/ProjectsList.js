import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <li
      className="card projects-list"
      style={{ width: "25rem", height: "32rem" }}
    >
      <div className="card-img-top">{props.image}</div>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn" target="_blank" rel="noreferrer">
          See project
        </a>
      </div>
    </li>
  );
};

export default Projects;
