import React from "react";
import Card from "../UI/Card";
import ProjectsList from "./ProjectsList";

import DictionaryApp from "../../images/dictionary-app.png";
import ReactWeatherApp from "../../images/react-weatherapp.png";
import ExpenseApp from "../../images/expense-app.png";
import Portfolio from "../../images/portfolio.png";
import WeatherApp from "../../images/weather-app.png";

import "./Projects.css";

const projects = [
  {
    id: "p1",
    name: "Weather App",
    image: <img src={ReactWeatherApp} alt="React Weater App" />,
    url: "https://incredible-palmier-66380a.netlify.app/",
    description: "I built this with react js",
  },
  {
    id: "p2",
    name: "Dictionary App",
    image: <img src={DictionaryApp} alt="React Dictionary App" height="200" />,
    url: "https://euphonious-profiterole-200b68.netlify.app/",
    description: "I built this with react js",
  },
  {
    id: "p3",
    name: "Expenses Tracker App",
    image: <img src={ExpenseApp} alt="Expense tracker app" />,
    url: "https://musical-gumption-1fb7ec.netlify.app/",
    description: "I built this app using react js",
  },
  {
    id: "p4",
    name: "Responsive Website",
    image: <img src={Portfolio} alt="Responsive website" />,
    url: "https://shiny-pie-937396.netlify.app/",
    description: "I built this app using react js",
  },
  {
    id: "p5",
    name: "Weather App",
    image: <img src={WeatherApp} alt="Weather App" />,
    url: "https://roaring-horse-810c72.netlify.app/",
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
