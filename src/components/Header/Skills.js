import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Skills = (props) => {
  const [frontEndList, setFrontEndList] = useState(true);
  const [reactList, setReactList] = useState(false);
  const [plusIcon, setPlusIcon] = useState(true);
  const [crossIcon, setCrossIcon] = useState(false);
  const [reactPlusIcon, setReactPlusIcon] = useState(true);
  const [reactCrossIcon, setReactCrossIcon] = useState(false);

  const FrontEndSkillsHandler = (event) => {
    event.preventDefault();
    setFrontEndList(true);
    setReactList(false);
    setPlusIcon(false);
    setCrossIcon(true);
    setReactPlusIcon(true);
    setReactCrossIcon(false);
  };

  const ReactSkillsHandler = (event) => {
    event.preventDefault();
    setReactList(true);
    setFrontEndList(false);
    setReactPlusIcon(false);
    setReactCrossIcon(true);
    setPlusIcon(true);
    setCrossIcon(false);
  };

  return (
    <Fragment>
      <div className="skills">
        <button className="btn" type="button" onClick={FrontEndSkillsHandler}>
          Front-end Skills {""}
          <span>
            {plusIcon && <FontAwesomeIcon icon={faPlus} />}
            {crossIcon && <FontAwesomeIcon icon={faXmark} />}
          </span>
        </button>
        {""}{" "}
        <button
          className="btn"
          type="button"
          onClick={ReactSkillsHandler}
          onChange
        >
          React Skills {reactPlusIcon && <FontAwesomeIcon icon={faPlus} />}
          {reactCrossIcon && <FontAwesomeIcon icon={faXmark} />}
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
