import React from "react";
import Navigation from "../components/Navigation"
import Hero from "../components/Hero";
import Work from "../components/work";
import Footer from "../components/footer";
const Home = () =>{
    return(
        <div>
            <Navigation/>
            <Hero />
            <Work />
            <Footer />
        </div>
    );
}
export default Home;