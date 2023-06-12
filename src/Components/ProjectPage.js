import React from "react";
import '../StyleSheets/ProjectContainer.css'


const ProjectPage = ({ project, className }) => {






    return(
        <>
        <div className='project-showcase-container' >
            <div className={`project-container ${className}`}>
                <img className="project-thumbnail" src={project.img}/>
                <h1>{project.name}</h1>
                <p>Description</p>
            </div>
        </div>
        </>
    );
};

export default ProjectPage;