import React from "react";
import "./Herostylesheet.css";

const Heroproject = () => {
  return(
    <div className="hero">
        <div className="mask">
            <img className="Introimg" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="intro-img"></img>
        </div>
        <div className="content">
            <h1>Projects</h1>
            <p>Some of my recent works are here</p>
        </div>
    </div>

  )
};

export default Heroproject;