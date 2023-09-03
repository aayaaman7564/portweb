import React from "react";
import { Link } from "react-router-dom";
import "./Herostylesheet.css";

const Hero = () => {
  return(
    <div className="hero">
        <div className="mask">
            <img className="Introimg" src="https://wallpaperaccess.com/full/5651980.jpg" alt="intro-img"></img>
        </div>
        <div className="content">
            <p> Hi there, I am</p>
            <h1>Aman Kumar</h1>
            <p>I am a Full Stack Web Developer. To know More About me have a look at my resume and projects below.</p>
            <br></br>
            <div>
                <a className="btn" href="https://drive.google.com/file/d/19VA_KSUgYeLabp9UcdKCl8OmpwFsf-Lg/view?usp=sharing">Resume</a>
                <Link to="/Project" className=" btn btn-light">Project</Link>
            </div>
        </div>
    </div>

  )
};

export default Hero;