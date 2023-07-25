import React from "react";
import projects from '../Data/ProjectList'
import placeholder from '../images/placeholder.png'
import ProjectPage from "../Components/ProjectPage";
import '../StyleSheets/ProjectContainer.css'
import { Link } from "react-router-dom";

const Projects = () => {

let alternate = 0;

const projectNodes = projects.map((project) => {
    let className = 'left-project';
    alternate ++;
    if (alternate %2 === 0) {
        className = 'right-project';
    };
    return <ProjectPage className={className} key={project.name} project={project}/>
})

    return(
        <>
        <div className="project-showcase-container">
            <div className="project-page-title-div">
                <h1 className="project-page-title">My Projects</h1>
            </div>
            {projectNodes}
            <div className="home-page-div">
                <Link to='/portfolio_v2' className="home-page-button" onClick={() => window.scrollTo(0, 0)}> Back to Home Page </Link>
            </div>
        </div>
        </>
    );
};

export default Projects;