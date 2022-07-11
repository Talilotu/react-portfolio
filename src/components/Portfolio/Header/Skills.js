import React, { Fragment } from "react";
import Button from "../../UI/Button";

import "./Header.css";

const Skills = (props) => {
  return (
    <Fragment>
      <div className="skills-button">
        <Button className="btn">Front-end Skills</Button>
        {""} <Button className="btn">React Skills</Button>
      </div>
      <div className="front-end">
        <h3>Front-end skills</h3>
        <ul>{props.frontEndSkills}</ul>
      </div>
      <div className="react-skills">
        <h3>React skills</h3>
        <ul>{props.reactSkills}</ul>
        <p>React Hooks:</p>
        <ul>{props.reactHooks}</ul>
      </div>
    </Fragment>
  );
};
export default Skills;
