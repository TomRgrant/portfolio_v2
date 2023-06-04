import React from "react";
import skills from '../Data/Skills.js'

import '../StyleSheets/SkillDisplay.css'
import SkillNode from "./skillNode.js";

const SkillDisplay = () => {

const skillNodes = skills.map((skill) => {
    return <SkillNode skill={skill}/>
})



    return(
        <>
        <div className="skill-container">
            {skillNodes}
        </div>
        </>
    );
};


export default SkillDisplay;