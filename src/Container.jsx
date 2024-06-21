import React from 'react';

import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'

function Container () {

    return (
        
        <div className="container w-full h-screen overflow-auto">
            <Home />
            <AboutMe />
        </div>
    )
}

export default Container