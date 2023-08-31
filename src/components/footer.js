

import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return(
    <div className="footer">
      <div className="fcontainer">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
            <div>
              <p>Rosera, Samastipur</p>
              <p>Bihar, India</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />+91-822-7908-006</h4>
          </div>
          <div className="mail">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />amankumar002003@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4> About Me</h4>
          <p> This is me Aman Kumar from NIT Silchar, a Web developer,
            Tech-Enthusiast and a passionate learner. This portfolio 
            has a compilation of my works created with a sound knowledge
            on certain topics.
          </p>
          <div className="social">
            <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem"}} />
            <a href="https://github.com/aayaaman7564"><FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}} /></a>
            <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;