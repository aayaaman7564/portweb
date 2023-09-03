import React from "react";
import Home from "./Routes/Home";
import Project from "./Routes/Project";
import Contact from "./Routes/contact";
import {Route, Routes} from "react-router-dom";

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Project" element={<Project />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </>
  );
}
export default App;