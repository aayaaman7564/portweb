import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigationstyle.css";
import {FaBars, FaTimes} from "react-icons/fa";
const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >=100) {
      setColor(true);
    }else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return(
    <div className={color ? "Heading Heading-bg":"Heading"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/Project">
            <p>Project</p>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{color: "#fff"}}/>
        ):(
          <FaBars size={20} style={{color: "#fff"}}/>
        )}  
        
        
      </div>
    </div>
  )
};

export default Navigation;