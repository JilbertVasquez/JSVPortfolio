import React from 'react';

import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'

function Container () {

    return (
        
        <div className="container w-full h-screen overflow-auto">
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
        </div>
    )
}

export default Container