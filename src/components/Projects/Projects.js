import React from "react";
import Card from "../UI/Card";
import ProjectsList from "./ProjectsList";

import DictionaryApp from "../../images/dictionary-app.png";
import ReactWeatherApp from "../../images/react-weatherapp.png";
import ExpenseApp from "../../images/expense-app.png";
import Portfolio from "../../images/portfolio.png";

import "./Projects.css";

const projects = [
  {
    id: "p1",
    name: "React Weather App",
    image: <img src={ReactWeatherApp} alt="Weather-App" />,
    url: "link",
    description: "I built this with react js",
  },
  {
    id: "p2",
    name: "React Dictionary App",
    image: <img src={DictionaryApp} alt="Dictionary-App" height="230" />,
    url: "link",
    description: "I built this with react js",
  },
  {
    id: "p3",
    name: "Expenses Tracker App",
    image: <img src={ExpenseApp} alt="Dictionary-App" />,
    url: "link",
    description: "I built this app using react js",
  },
  {
    id: "p3",
    name: "Responsive Website",
    image: <img src={Portfolio} alt="Dictionary-App" />,
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
      image={project.image}
      url={project.url}
      description={project.description}
    />
  ));

  return (
    <Card>
      <div className="projects">
        <h1>Featured Projects</h1>
        <ul>{projectsList}</ul>
      </div>
    </Card>
  );
};

export default Projects;
