import React from "react";
import '../StyleSheets/ProjectCaroselCard.css'


const ProjectCaroselCard = ({ project }) => {






    return(
        <>
        <div className="card">
            {/* <p className="card-title text-outline">{project.name}</p> */}
            <img className="card-img" src={project.img} alt={`Image of the ${project.name} app`} />
            <p className="card-summary">{project.summary}</p>
        </div>
        </>
    );
};

export default ProjectCaroselCard;