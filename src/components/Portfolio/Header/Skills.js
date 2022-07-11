import React, { Fragment, useState } from "react";

import "./Header.css";

const Skills = (props) => {
  const [frontEndList, setFrontEndList] = useState(true);
  const [reactList, setReactList] = useState(false);

  const FrontEndSkillsHandler = (event) => {
    event.preventDefault();
    setFrontEndList(true);
    setReactList(false);
  };

  const ReactSkillsHandler = (event) => {
    event.preventDefault();
    setReactList(true);
    setFrontEndList(false);
  };

  return (
    <Fragment>
      <div className="skills">
        <button className="btn" type="button" onClick={FrontEndSkillsHandler}>
          Front-end Skills +
        </button>
        {""}{" "}
        <button className="btn" type="button" onClick={ReactSkillsHandler}>
          React Skills +
        </button>
      </div>
      <div className="front-end">
        {frontEndList && (
          <div>
            <h3>Front-end skills</h3>
            <ul>{props.frontEndSkills}</ul>
          </div>
        )}
      </div>

      <div className="react-skills">
        {reactList && (
          <div>
            <h3>React skills</h3>
            <ul>{props.reactSkills}</ul>
            <p>React Hooks:</p>
            <ul>{props.reactHooks}</ul>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default Skills;
