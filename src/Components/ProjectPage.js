import React from "react";
import '../StyleSheets/ProjectContainer.css'


const ProjectPage = ({ project, className }) => {


// opens project github page in new tab
const sourceCode = (e) => {
    window.open(e)
}



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
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="code-buttons">
                        <h2 onClick={() => sourceCode(project.code)}>View Source Code</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectPage;