import React from "react";
import projects from '../Data/ProjectList'
import placeholder from '../images/placeholder.png'
import ProjectPage from "../Components/ProjectPage";
import '../StyleSheets/ProjectContainer.css'

const Projects = () => {

let alternate = 0;

const projectNodes = projects.map((project) => {
    let className = 'left-project';
    alternate ++;
    if (alternate %2 === 0) {
        className = 'right-project'
    };
    return <ProjectPage className={className} key={project.name} project={project}/>
})

    return(
        <>
            {projectNodes}
        </>
    );
};

export default Projects;