import React from "react";
import Skills from "./Skills";

const ListSkills = () => {
  const frontEnd = [
    "React js",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "SCSS (SASS)",
    "JavaScript",
    "Editor",
    "API",
    "GitHub",
    "Bootstrap",
    "Hosting",
    "Flexbox",
    "SEO",
    "Responsive",
  ];

  const react = [
    "React Hooks",
    "Redux",
    "React Router",
    "context API",
    "HTTP Requests",
    "Animation",
    "Unit Tests",
  ];

  const hooks = [
    "useState",
    "useEffect",
    "useContext",
    "useReducer",
    "useRef",
    "custom hooks",
  ];

  const frontEndList = frontEnd.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));

  const reactList = react.map((react, index) => <li key={index}>{react}</li>);

  const reactHooksList = hooks.map((hook, index) => (
    <li key={index}>{hook}</li>
  ));

  return (
    <div className="list-skills">
      <Skills
        frontEndSkills={frontEndList}
        reactSkills={reactList}
        reactHooks={reactHooksList}
      />
    </div>
    //Forwarding the list to skills component.
  );
};

export default ListSkills;
