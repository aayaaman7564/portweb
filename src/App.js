import React from "react";
import Navigation from "./components/Navigation"
import Footer from "./components/footer";
import Heroproject from "./components/Heroproject";
import "./components/projectcardstyles.css";
import Work from "./components/work";
const Project = () =>{
    return(
        <div>
            <Navigation />
            <Heroproject />
            <Work />
            <Footer />
        </div>
    );
}
export default Project;