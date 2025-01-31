import React from 'react';

import Home from './Home/Home.jsx'
import AboutMe from './AboutMe/AboutMe.jsx'
import Experience from './Experience/Experience.jsx'
import Projects from './Projects/Projects.jsx'
import Skills from './Skills/Skills.jsx'
import Certification from './Certifications/Certification.jsx';
import Contact from './Contact/Contact.jsx'
import Loading from './Design/Loading.jsx';

function Container() {
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