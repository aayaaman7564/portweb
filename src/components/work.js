import React from "react";
import Projectcard from "./projectcard";
import ProjectData from "./workcarddata";
import "./projectcardstyles.css";
const Work = () => {
    return(
        <div className="container">
            <h1 className="heading">Project</h1>
            <div className="projectContainer">
                {ProjectData.map((val, ind) =>{
                  return(
                    <Projectcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                  )
                })}
            </div>
        </div>
    );
}
export default Work;