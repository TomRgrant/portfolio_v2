import React from "react";
import {skills, learning} from '../Data/Skills.js'

import '../StyleSheets/SkillDisplay.css'
import SkillNode from "./skillNode.js";
import Learn from "./Learn.js";

const SkillDisplay = () => {

const skillNodes = skills.map((skill) => {
    return <SkillNode key={skill.name} skill={skill}/>
})

const learningNodes = learning.map((learn) => {
    return <Learn learn={learn} />
})


    return(
        <>
        <div className="skill-wrapper">
            <div className="skill-container">
                {skillNodes}
            </div>
        </div>
        </>
    );
};


export default SkillDisplay;