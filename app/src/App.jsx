import React from 'react';
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Playful from "./components/Playful.jsx";
import Featured from "./components/Featured.jsx";
import Card from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

    const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className="w-full h-screen text-[#212121]">
            <Navbar/>
            <LandingPage/>
            <Marquee/>
            <About/>
            <Playful/>
            <Featured/>
            <Card/>
            <Footer/>
        </div>
    )
}

export default App;