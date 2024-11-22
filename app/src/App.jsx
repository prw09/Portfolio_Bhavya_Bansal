import React from 'react';
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Playful from "./components/Playful.jsx";


const App = () => {
    return (
        <div className="w-full h-screen text-black">
            <Navbar/>
            <LandingPage/>
            <Marquee/>
            <About/>
            <Playful/>
        </div>
    )
}

export default App;