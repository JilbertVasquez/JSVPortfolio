import React from 'react';
import Portfolio from './assets/Portfolio.png';
import DFSLogin from './assets/DFSLogin.png';
import BatStateUCampusMap from './assets/BatStateUCampusMap.png';
import Vault from './assets/Vault.png';
import MuseumRevive from './assets/MuseumRevive.png';
import CelestialHotel from './assets/CelestialHotel.png';


import './custom.css';

const projectDetails = [
    {
        image:          Portfolio,
        title:          'Personal Website',
        description:    `This personal website is designed to compile and highlight my skills, experience, projects, 
                        certificates, and social media platform accounts. It uses modern web development technologies to ensure a 
                        responsive and appealing interface. It allows me to connect with like-minded professionals and potential collaborators.`,
        languages:      ['html', 'css', 'javascript', 'React', 'Tailwind'],
        link:           '#Home',
    },
    {
        image:          DFSLogin,
        title:          'BatStateU - Alangilan Drive with Distributed File System',
        description:    'Developed a secure and user-friendly Django web application for data management, utilizing a Distributed File system for redundancy and security.',
        languages:      ['html', 'css', 'javascript', 'python', 'Django', 'Mysql'],
        link:           'https://jilbertvasquez.github.io/DFSUserManual/',
    },
    {
        image:          BatStateUCampusMap,
        title:          'BatStateU - Alangilan Campus Site Map',
        description:    'Developed an interactive React web application for navigation, allowing users to find buildings, specific rooms, and get directions with ease.',
        languages:      ['html', 'css', 'javascript', 'React'],
        link:           '',
    },
    {
        image:          Vault,
        title:          'Personal Vault System',
        description:    'Developed an account manager in NetBeans Java, providing a secure platform for users to manage and store their accounts and passwords with MySQL integration.',
        languages:      ['Java', 'Netbeans', 'Mysql'],
        link:           'https://jilbertvasquez.github.io/PersonalVaultUserManual/',
    },
    {
        image:          MuseumRevive,
        title:          'Museum Revive',
        description:    `Develop a Batangas Museums website to guide you in exploring the rich history and culture of 
                        Batangas through its beautiful museums. This website highlights the stunning architecture and fascinating exhibits 
                        of each museum, providing a visual and informational delight for visitors.`,
        languages:      ['html', 'css', 'javascript'],
        // link:           'https://museumrevive.github.io/MuseumRevive/',
        link:           'https://jilbertvasquez.github.io/MuseumRevive/',
    },
    {
        image:          CelestialHotel,
        title:          'Celestial Hotel',
        description:    `A website that showcases many options for guest rooms, suites, and other luxurious hotel features. 
                        Not excluded were the boutique, contact details, and reservation options. `,
        languages:      ['html', 'css'],
        link:           'https://jilbertvasquez.github.io/Company/',
    },
    
    // {
    //     image:          '',
    //     title:          '',
    //     description:    '',
    //     languages:      '',
    //     link:           '',
    // },
];

const backgroundColorBasedOnLanguage= (language) => {
    switch (language.toLowerCase()) {
        case 'html':
            return '#e34c26';
            return 'linear-gradient(135deg, #e34c26, #ebebeb)';
        case 'css':
            return '#264de4';
            return 'linear-gradient(135deg, #264de4, #ebebeb)';
        case 'javascript':
            return '#cfab00';
            return '#f1d302';
            return '#f0db4f';
            return 'linear-gradient(135deg, #f0db4f, #323330)';
        case 'react':
            return '#0970D2 ';
            return '#61DBFB';
        case 'php':
            return '#484C89';
            return 'linear-gradient(135deg, #484C89, #AEB2D5)';
        case 'bootstrap':
            return '#563d7c';
            return 'linear-gradient(135deg, #563d7c, #ffffff)';
        case 'django':
            return '#092e20';
        case 'tailwind':
            return '#06b6d4';
            return 'linear-gradient(135deg, #4c1d95, #a5f3fc)';
        case 'mysql':
            return '#06b6d4'
            return 'linear-gradient(135deg, #06b6d4, #f29111)';
        case 'java':
            return '#cc0000';
        case 'netbeans':
            return '#5FB233';
        case 'python':
            return '#4584b6';
        default:
            return '#6B7280';
    }
}


function Projects () {

    return (
        <section className="container custom_bg_2 3xl flex justify-center items-center pb-8" id='Projects'>
            <section className='w-4/5 h-full flex flex-col'>
                <div className='w-full px-16 mt-32'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 pt-5 pb-2 text-3xl uppercase font-semibold' >Projects</h1>
                    <h3 className='text-white tracking-wider text-start px-5 pb-2 text-lg capitlize font-normal'>Here are some of the projects I've worked on recently.</h3>
                </div>
                <div className=' grid grid-cols-3 gap-x-14 gap-y-20 px-14 p-6 mt-10'>
                    {/* <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard /> */}

                    {projectDetails.map((project, index) => (
                        <EventCard key={index}  image={project.image} title={project.title} description={project.description} languages={project.languages} link={project.link} />
                    ))}

                </div>
            </section>
        </section>
    )
}

const EventCard = ({image, title, description, languages, link}) => {
    const navigateToLink = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div className='event_shadow w-full h-full rounded-xl border-2 border-sky-500  p-4 px-6 hover:bg-gray-950'>
            <div className='w-full h-2/6'>
                <img className='w-full h-full rounded' src={image} alt="tumbnail" />
            </div>
            <div className='w-full '>
                <h1 className='custom_font_color_1 tracking-wide px-4 pt-2 flex justify-center text-center text-lg capitalize font-medium' >{title}</h1>
            </div>
            <div className='w-full '>
                <p className='text-white px-2 pt-2 pb-2 text-base indent-6 text-justify ' >{description}</p>
            </div>
            <div className='w-full   grid grid-cols-4 gap-x-2 px-2 gap-y-1 justify-center'>
                {/* <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >html</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >css</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >Javascript</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >React</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >Tailwind</h4> */}

                {languages.map((pl, index) => (
                    <h4 key={index} className='text-white w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase' style={{ backgroundColor: backgroundColorBasedOnLanguage(pl) }} >{pl}</h4>
                ))}

            </div>
            <div className='w-full mt-5 '>
                <button className='rounded-full px-3 p-2 bg-black text-white' onClick={() => navigateToLink(link)}>Learn More</button>
            </div>
            
        </div>
    )
}


export default Projects

