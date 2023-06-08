import React from "react";

import '../StyleSheets/Learn.css'

const Learn = ({ learn }) => {


return(
    <>
    <div className="learn-container">
        <img className="learn-img" src={learn.img} alt={learn.alt} />
        <h1 className="learn-name">{learn.name}</h1>
    </div>
    </>
);
};

export default Learn;