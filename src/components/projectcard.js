import React from "react";
import { NavLink } from "react-router-dom";
import "./projectcardstyles.css";
const Projectcard = (props) => {
    return(
        <div className="projectCard">
            <img src={props.imgsrc} alt="kuchh v"></img>
            <h2 className="projectTitle">{props.title}</h2>
            <div className="projectDetails">
                <p>{props.text}</p>
                <div className="projectButtons">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.source} className="btn">Soruce</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Projectcard;