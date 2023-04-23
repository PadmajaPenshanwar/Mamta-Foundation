import React from "react";
import Navbar from "../components/NavigationBar/Navbar";
import Footer from "../components/Footer";
import Wwd from "../components/Wwd";
import Weprovide from "../components/Weprovide";
import Hero from '../components/Hero';
import ScrollToTopOnMount from "./scrollToTop";

function Services(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Wwd/>
        <Weprovide/>
        <Footer/>
        </>
    )
}
export default Services;