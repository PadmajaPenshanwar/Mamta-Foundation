import React from "react";
import Navbar from "../components/NavigationBar/Navbar";
import AboutUs from "../components/AboutUs";
import Wwd from "../components/Wwd";
import Achievements from "../components/Achievements";
import Footer from '../components/Footer'
import Slider from '../components/Slider/Slider'

function Home(){
    return(
        <>
        <Navbar/>
        <Slider />
        <AboutUs/>
        <Wwd/>
        <Achievements/>
        <Footer/>
        </>
    )
}
export default Home;