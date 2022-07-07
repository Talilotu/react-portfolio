import React from "react";

const ListSkills = () => {
  const skills = [
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

  const reacts = [
    "React Hooks",
    "Redux",
    "React Router",
    "context API",
    "Http Requests",
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

  const listSkills = skills.map((skill, index) => <li>{skill}</li>);

  const reactSkills = reacts.map((react, index) => <li>{react}</li>);

  const reactHooks = hooks.map((hook, index) => <li>{hook}</li>);

  return (
    <div className="list-skills">
      <div className="front-end">
        <h3>Front-end skills</h3>
        <ul>{listSkills}</ul>
      </div>
      <div className="react-skills">
        <h3>React skills</h3>
        <ul>{reactSkills}</ul>
        <p>React Hooks:</p>
        <ul>{reactHooks}</ul>
      </div>
    </div>
  );
};

export default ListSkills;
