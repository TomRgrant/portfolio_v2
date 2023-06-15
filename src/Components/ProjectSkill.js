import React from "react";
import { skills } from '../Data/Skills';

const ProjectSkill = ({ skill }) => {
    // sets target skill to the project skill in lower case
  const targetSkill = skill.toLowerCase();

    // loops to find if the current skill.name === targetSkill
  const skillObject = skills.find((s) => s.name.toLowerCase() === targetSkill);


//   if true return the logo img
  if (skillObject) {
    return (
      <img className="project-skill" src={skillObject.img} alt={skillObject.alt} />
    );
  }

  return null; // Return null if the skill object is not found
};

export default ProjectSkill;