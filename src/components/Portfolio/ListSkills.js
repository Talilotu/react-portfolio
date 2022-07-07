import React from "react";

const ListSkills = () => {
  const skills = [
    "React js",
    "HTML",
    "CSS",
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

  const listSkills = skills.map((skill, index) => <li>{skill}</li>);

  return (
    <div className="list-skills">
      <div>
        <h3>Front-end skills</h3>
        <ul>{listSkills}</ul>
      </div>
    </div>
  );
};

export default ListSkills;
