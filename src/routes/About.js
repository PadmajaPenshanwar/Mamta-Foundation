
import React from "react";
import Navbar from "../components/NavigationBar/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import WhyHIV from '../components/WhyHIV'
function About(){
    return(
        <>
        <Navbar/>
        <Hero />
        <AboutUs/>
        <WhyHIV/>
        <Footer/>
        
        </>
    )
}
export default About;