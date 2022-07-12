import React from "react";
import Card from "../UI/Card";
import ProjectsList from "./ProjectsList";

import "./Projects.css";

const projects = [
  {
    id: "p1",
    name: "React Weather App",
    photo: "img",
    url: "link",
    description: "I built this with react js",
  },
  {
    id: "p2",
    name: "React Dictionary App",
    photo: "img",
    url: "link",
    description: "I built this with react js",
  },
  {
    id: "p3",
    name: "Expenses Tracker App",
    photo: "img",
    url: "link",
    description: "I built this app using react js",
  },
];

const Projects = () => {
  const projectsList = projects.map((project) => (
    <ProjectsList
      id={project.id}
      key={project.id}
      name={project.name}
      photo={project.photo}
      url={project.url}
      description={project.description}
    />
  ));

  return (
    <Card>
      <div className="Projects">
        <h1>Featured Projects</h1>
        <ul>{projectsList}</ul>
      </div>
    </Card>
  );
};

export default Projects;
