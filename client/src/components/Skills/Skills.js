import React from "react";
import "./Skills.css";

function Skills({ skills, type }) {
  return (
    <div className={`${type}-skills-wrapper`}>
      <h3>Your knowledge & skills</h3>
      <ul className="required-skills">
        {skills.map((skill, index) => (
          <li className={`${type}-skills`} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
