import React from "react";
import '../StyleSheets/SkillNode.css'

const SkillNode = ({ skill }) => {




    return(
        <>
        <div className="container">
            <img className="skill-img" src={skill.img} alt={`logo of ${skill.name}`}/>
            <h1 className="skill-name">{skill.name}</h1>
        </div>
        </>
    );
};

export default SkillNode;