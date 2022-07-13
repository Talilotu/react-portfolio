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
    description:
      "I built this weather app using react js library, npm, an active API and advanced CSS. I fetched the weather data from another source using API. This is a live app where you can easily search the weather of any country.",
  },
  {
    id: "p2",
    name: "Dictionary App",
    image: <img src={DictionaryApp} alt="React Dictionary App" height="200" />,
    url: "https://euphonious-profiterole-200b68.netlify.app/",
    description:
      "I built this dictionary app using react js, 2 active APIs and advanced CSS. I fetched the API from two different sources, one for the dictionary definitions, and one for the photo at the bottom of the app. When you search a word, it not only shows the definitions but also photos of that word.",
  },
  {
    id: "p3",
    name: "Expenses Tracker App",
    image: <img src={ExpenseApp} alt="Expense tracker app" />,
    url: "https://musical-gumption-1fb7ec.netlify.app/",
    description:
      "I built this expense tracker app using react js library, various react hooks and advanced CSS. You can add new expenses every year and keep track of how much you spend yearly.",
  },
  {
    id: "p4",
    name: "Responsive Website",
    image: <img src={Portfolio} alt="Responsive website" />,
    url: "https://shiny-pie-937396.netlify.app/",
    description:
      "This was my previous portfolio which I built with HTML, vanilla Javascript, and advanced CSS. It is fully responsive and have multiple pages.",
  },
  {
    id: "p5",
    name: "Weather App",
    image: <img src={WeatherApp} alt="Weather App" />,
    url: "https://roaring-horse-810c72.netlify.app/",
    description:
      "This was my first weather app which I built with HTML, vanilla Javascript, an active API to fetch the weather data from another source, and advanced CSS.",
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
        <h1>Projects I've built</h1>
        <ul>{projectsList}</ul>
      </div>
    </Card>
  );
};

export default Projects;
