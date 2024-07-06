import React from 'react';

import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Certification from './Certification.jsx';
import Contact from './Contact.jsx'
import Loading from './Loading.jsx';

function Container () {
    const [isLoading, setIsLoading] = React.useState(true);

    // Simulate loading
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulate a 3-second loading time
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />; // Show the loading animation
    }
    return (
        
        <div className="w-full h-screen">

            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <Skills />
            <Certification />
            <Contact />
        </div>
    )
}

export default Container