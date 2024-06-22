import React from 'react';

import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Experience from './Experience.jsx'

function Container () {

    return (
        
        <div className="container w-full h-screen overflow-auto">
            <Home />
            <AboutMe />
            <Experience />
        </div>
    )
}

export default Container