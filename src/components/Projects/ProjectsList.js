import React from "react";

import "./Projects.css";

const Projects = (props) => {
  return (
    <li className="card projects-list" style={{ width: "18rem" }}>
      <div className="card-img-top">{props.image}</div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </li>
  );
};

export default Projects;
