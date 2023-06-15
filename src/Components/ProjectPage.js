import React from "react";
import '../StyleSheets/ProjectContainer.css'
import ProjectSkill from "./ProjectSkill";


const ProjectPage = ({ project, className }) => {


// opens project github page in new tab
const sourceCode = (e) => {
    window.open(e)
}

// opens the demo for the project
const viewDemo= (e) => {
    window.open(e)
}

const skillNodes = project.skills.map((skill) => {
    return <ProjectSkill skill={skill} key={skill.name}/>
})



    return(
        <>
        <div className='project-showcase-container' >
            <div className={`project-container ${className}`}>
                <div className="project-thumbnail-container">
                    <img className="project-thumbnail" src={project.img}/>
                </div>
                <div className="info-box">
                    <div className="title-container">
                        <h1 className="project-title">{project.name}</h1>
                        <div className="project-skill-list">
                            {skillNodes}
                        </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="code-buttons">
                        <h2 className="project-button" onClick={() => sourceCode(project.code)}>View Source Code</h2>
                        <h2 className="project-button" onClick={() => viewDemo(project.url)} hidden={project.url ? false : true}>View Demo</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectPage;