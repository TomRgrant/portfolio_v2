import React from "react";
import '../StyleSheets/ProjectContainer.css'


const ProjectPage = ({ project, className }) => {






    return(
        <>
        <div className='project-showcase-container' >
            <div className={`project-container ${className}`}>
                <div className="project-thumbnail-container">
                    <img className="project-thumbnail" src={project.img}/>
                </div>
                <div className="info-box">
                    <h1 className="project-title">{project.name}</h1>
                    <p className="project-description">Description</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectPage;