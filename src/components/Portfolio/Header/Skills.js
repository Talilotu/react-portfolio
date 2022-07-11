import React from "react";

const Skills = (props) => {
  return (
    <div className="skills">
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
    </div>
  );
};
export default Skills;
