import React from 'react';
import Navbar from "../components/NavigationBar/Navbar";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection/EventSection.js"
import Hero from '../components/Hero';
function Events(){
    return(
        <>
        <Hero/>
        <Navbar/>
        <EventSection/>
        <Footer/>
        </>
    )
}
export default Events;