import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <li
      className="card projects-list"
      style={{ width: "25rem", height: "34rem" }}
    >
      <div className="card-img-top">{props.image}</div>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.description}</p>
        <span className="url">
          <a
            href={props.projectUrl}
            className="btn project-url"
            target="_blank"
            rel="noreferrer"
          >
            See project
          </a>
          <a
            href={props.sourceUrl}
            className="btn source-url"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
        </span>
      </div>
    </li>
  );
};

export default Projects;
