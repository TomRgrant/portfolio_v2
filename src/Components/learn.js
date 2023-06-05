import React from "react";

import '../StyleSheets/Learn.css'

const Learn = ({ learn }) => {


return(
    <>
    <div className="contain">
        <h1>{learn.name}</h1>
    </div>
    </>
);
};

export default Learn;