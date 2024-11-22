import React from 'react';
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Playful from "./components/Playful.jsx";
import Featured from "./components/Featured.jsx";
import Card from "./components/Cards.jsx";


const App = () => {
    return (
        <div className="w-full h-screen text-[#212121]">
            <Navbar/>
            <LandingPage/>
            <Marquee/>
            <About/>
            <Playful/>
            <Featured/>
            <Card/>
        </div>
    )
}

export default App;