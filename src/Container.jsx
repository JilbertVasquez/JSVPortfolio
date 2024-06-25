import React from 'react';

import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

function Container () {

    return (
        
        <div className="container w-full h-screen overflow-auto">
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}

export default Container