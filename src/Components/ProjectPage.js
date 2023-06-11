import React from "react";
import '../StyleSheets/ProjectContainer.css'


const ProjectPage = ({ project, className }) => {






    return(
        <>
        <div className={className}>
            {project.name}
        </div>
        </>
    );
};

export default ProjectPage;