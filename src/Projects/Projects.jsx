import PropTypes from 'prop-types';
import { useState } from 'react';
import Portfolio from '../assets/Portfolio.png';
import DFSLogin from '../assets/DFSLogin.png';
import BatStateUCampusMap from '../assets/BatStateUCampusMap.png';
import Vault from '../assets/Vault.png';
import MuseumRevive from '../assets/MuseumRevive.png';
import CelestialHotel from '../assets/CelestialHotel.png';
import BudgetTrackerApp from '../assets/BudgetTrackerApp.png';
import FoodNutritionApp from '../assets/FoodNutritionApp.png';
import TodoApp from '../assets/TodoApp.png';
import RQM from '../assets/RQM.png';

import tributepage from '../assets/tributepage.png';
import surveyform from '../assets/surveyform.png';
import technicaldocumentationpage from '../assets/technicaldocumentationpage.png';
import landingpage from '../assets/landingpage.png';
import personalportfoliowebpage from '../assets/personalportfoliowebpage.png';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import '../custom.css';

const projectDetails = [
    {
        image: BudgetTrackerApp,
        title: 'Budget Tracker App',
        description: `Developed a secure and user-friendly budgeting application that allows users to manage expenses and income with authenticated access and protected data flow.`,
        languages: ['angular', 'asp net core', 'api', 'tailwind', 'auth0', 'jwt token', 'mysql', 'azure'],
        link: 'https://budget-tracker-app.victoriousplant-30209041.southeastasia.azurecontainerapps.io/',
    },
    {
        image: FoodNutritionApp,
        title: 'Food Nutrition App',
        description: `Built a visual food recognition tool that identifies food from uploaded images using the Imagga API and retrieves real-time nutritional data through the Nutritionix API.`,
        languages: ['angular', 'api', 'tailwind'],
        link: 'https://foodnutritionapp.netlify.app/',
    },
    {
        image: TodoApp,
        title: 'Todo App',
        description: `Created a simple and intuitive task management system that helps users organize, track, and complete their daily activities efficiently.`,
        languages: ['angular', 'asp net core', 'api', 'tailwind', 'jwt token', 'mysql'],
        link: 'https://github.com/JilbertVasquez/todo-app',
    },
    {
        image: Portfolio,
        title: 'Personal Website',
        description: `This personal website is designed to compile and highlight my skills, experience, projects, 
                        certificates, and social media platform accounts. It uses modern web development technologies to ensure a 
                        responsive and appealing interface. It allows me to connect with like-minded professionals and potential collaborators.`,
        languages: ['html', 'css', 'javascript', 'React', 'Tailwind'],
        link: '#Home',
    },
    {
        image: DFSLogin,
        title: 'BatStateU - Alangilan Drive with Distributed File System',
        description: 'Developed a secure and user-friendly Django web application for data management, utilizing a Distributed File system for redundancy and security.',
        languages: ['html', 'css', 'javascript', 'python', 'Django', 'Mysql'],
        link: 'https://jilbertvasquez.github.io/DFSUserManual/',
    },
    {
        image: BatStateUCampusMap,
        title: 'BatStateU - Alangilan Campus Site Map',
        description: 'Developed an interactive React web application for navigation, allowing users to find buildings, specific rooms, and get directions with ease.',
        languages: ['html', 'css', 'javascript', 'React'],
        link: 'https://batstateu-tneu-alangilan-map.netlify.app/',
    },
    {
        image: RQM,
        title: 'Random Quote Machine',
        description: 'Developed a responsive React web application for generating and sharing random quotes, featuring dynamic UI updates and seamless social media integration.',
        languages: ['angular', 'tailwind', 'api'],
        link: 'https://random-quote-machine-jsv.netlify.app/',
    },
    {
        image: MuseumRevive,
        title: 'Museum Revive',
        description: `Develop a Batangas Museums website to guide you in exploring the rich history and culture of 
                        Batangas through its beautiful museums. This website highlights the stunning architecture and fascinating exhibits 
                        of each museum, providing a visual and informational delight for visitors.`,
        languages: ['html', 'css', 'javascript'],
        // link:           'https://museumrevive.github.io/MuseumRevive/',
        link: 'https://jilbertvasquez.github.io/MuseumRevive/',
    },
    {
        image: CelestialHotel,
        title: 'Celestial Hotel',
        description: `A website that showcases many options for guest rooms, suites, and other luxurious hotel features. 
                        Not excluded were the boutique, contact details, and reservation options. `,
        languages: ['html', 'css'],
        link: 'https://jilbertvasquez.github.io/Company/',
    },

    // {
    //     image:          '',
    //     title:          '',
    //     description:    '',
    //     languages:      '',
    //     link:           '',
    // },
];

const projectDetails2 = [
     {
        image: Vault,
        title: 'Personal Vault System',
        description: 'Developed an account manager in NetBeans Java, providing a secure platform for users to manage and store their accounts and passwords with MySQL integration.',
        languages: ['Java', 'Netbeans', 'Mysql'],
        link: 'https://jilbertvasquez.github.io/PersonalVaultUserManual/',
    },
    {
        image: tributepage,
        title: 'Tribute Page (2021)',
        description: `Freecodecamp Responsive Web Design Project. Build a tribute page for a subject of your choosing, fictional or real.`,
        languages: ['html', 'css'],
        link: 'https://codepen.io/JilbertVasquez/full/oNwdxdW',
    },
    {
        image: surveyform,
        title: 'Survey Form (2021)',
        description: `Freecodecamp Responsive Web Design Project. Build a survey form to collect data from your users.`,
        languages: ['html', 'css'],
        link: 'https://codepen.io/JilbertVasquez/full/GREYVyB',
    },
    {
        image: landingpage,
        title: 'Landing Page (2021)',
        description: `Freecodecamp Responsive Web Design Project. Build a product landing page to market a product of your choice.`,
        languages: ['html', 'css'],
        link: 'https://codepen.io/JilbertVasquez/full/gORqRKP',
    },
    {
        image: technicaldocumentationpage,
        title: 'Technical Documentation Page (2021)',
        description: `Freecodecamp Responsive Web Design Project. Build a technical documentation page to serve as instruction or reference for a topic.`,
        languages: ['html', 'css'],
        link: 'https://codepen.io/JilbertVasquez/full/GREaPvK',
    },
    {
        image: personalportfoliowebpage,
        title: 'Personal Portfolio Webpage (2021)',
        description: `Freecodecamp Responsive Web Design Project. Build your own personal portfolio page.`,
        languages: ['html', 'css'],
        link: 'https://codepen.io/JilbertVasquez/full/KKvKPxq',
    },
];

const projectDetails3 = [
    {
        title: 'Inventory System',
        description: `InventorySystem is a Java desktop application for efficient inventory management. 
            It allows users to add, update, search, and track inventory items with a simple interface and MySQL database integration.`,
        languages: ['Java', 'Mysql'],
        link: 'https://github.com/JilbertVasquez/Inventory-System',
    },
    {
        title: 'Monitoring System',
        description: `MONITORING_SYSTEM is a Python desktop application designed for monitoring and managing system data. 
            It provides an intuitive interface for tracking, analyzing, and visualizing system metrics, making it suitable for administrative and research purposes.`,
        languages: ['python', 'excel', 'mysql'],
        link: 'https://github.com/JilbertVasquez/MONITORING_SYSTEM',
    },
    {
        title: 'AI APP',
        description: `AI ROBOT APP is a Python desktop application that provides interactive Text-to-Speech and FAQ functionalities. 
            Users can enter text to be spoken aloud, browse frequently asked questions, and enjoy a dynamic interface with integrated 
            video and image assets.`,
        languages: ['python', 'excel'],
        link: 'https://github.com/JilbertVasquez/AI-APP',
    },
    {
        title: 'Restaurant Ordering System',
        description: `Restaurant Ordering System is a Python desktop application for efficient restaurant order management. 
            Staff can select menu items, input quantities, calculate totals (including tax), process payments, generate receipts, 
            and save orders—all through a modern, user-friendly interface.`,
        languages: ['python', 'txt'],
        link: 'https://github.com/JilbertVasquez/Restaurant-Ordering-System',
    },
    {
        title: 'Student Enrollment System',
        description: `JSV_LAB2 is a Java desktop application for student course enrollment and management. 
            It provides an easy-to-use interface for entering student details, managing course information, 
            and confirming applications through multiple interactive forms.`,
        languages: ['java', 'mysql'],
        link: 'https://github.com/JilbertVasquez/JSV_LAB2',
    },
    {
        title: 'Payroll System',
        description: `JSV_PPA is a Java desktop application for payroll management. 
            It enables administrators and HR personnel to securely manage employee records, process payroll, 
            and generate payslips through an intuitive graphical interface.`,
        languages: ['java', 'mysql'],
        link: 'https://github.com/JilbertVasquez/JSV_PPA',
    },
    {
        title: 'ATM System',
        description: `ATM_MACHINE is a Java desktop application that simulates the core functionalities of 
            an Automated Teller Machine (ATM). It provides users with secure access to banking operations 
            such as account management, balance inquiry, deposits, withdrawals, and administrative controls 
            through an intuitive graphical interface.`,
        languages: ['java', 'mysql'],
        link: 'https://github.com/JilbertVasquez/ATM_MACHINE',
    },
    {
        title: 'Enrollment System',
        description: `Enrollment System Project is a Python desktop application for managing student enrollment 
            at Allison International School. It provides secure login, registration, and a dashboard for students, 
            along with features for viewing academic details, tuition, and club participation. The application uses 
            a modern UI and connects to a MySQL database for persistent data storage.`,
        languages: ['python', 'mysql'],
        link: 'https://github.com/JilbertVasquez/Enrollment-System-Project',
    },
];

const backgroundColorBasedOnLanguage = (language) => {
    switch (language.toLowerCase()) {
        case 'html':
            return '#e34c26';
        // return 'linear-gradient(135deg, #e34c26, #ebebeb)';
        case 'css':
            return '#264de4';
        // return 'linear-gradient(135deg, #264de4, #ebebeb)';
        case 'javascript':
            return '#cfab00';
        // return '#f1d302';
        // return '#f0db4f';
        // return 'linear-gradient(135deg, #f0db4f, #323330)';
        case 'react':
            return '#0970D2 ';
        // return '#61DBFB';
        case 'php':
            return '#484C89';
        // return 'linear-gradient(135deg, #484C89, #AEB2D5)';
        case 'bootstrap':
            return '#563d7c';
        // return 'linear-gradient(135deg, #563d7c, #ffffff)';
        case 'django':
            return '#092e20';
        case 'tailwind':
            return '#06b6d4';
        // return 'linear-gradient(135deg, #4c1d95, #a5f3fc)';
        case 'mysql':
            return '#06b6d4'
        // return 'linear-gradient(135deg, #06b6d4, #f29111)';
        case 'java':
            return '#cc0000';
        case 'netbeans':
            return '#5FB233';
        case 'python':
            return '#4584b6';
        case 'angular':
            return '#dd0031'; // Official Angular red
        case 'asp net core':
        case 'asp.net core':
            return '#512bd4'; // Official .NET Core purple
        case 'api':
        case 'api integration':
            return '#00bfa6'; // Neutral teal often used in API-related UIs
        case 'auth0':
            return '#eb5424'; // Auth0 official orange
        case 'jwt':
        case 'jwt token':
            return '#000000'; // JWT typically uses black, can also be '#a91d22' or '#edb200' for stylized
        case 'azure':
            return '#007FFF';
        case 'excel':
            return '#217346';
        default:
            return '#6B7280'; // Default gray
        // default:
        //     return '#6B7280';
    }
}


function Projects() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showbutton2, setShowButton2] = useState(false);

    const toggleShow1 = () => {
        const willShow = !show1;
        setShow1(willShow);

        // If hiding Project 1, also hide Project 2
        if (!willShow) {
            setShow2(false);
            setShowButton2(false);
        }
        else {
            setShowButton2(true);
        }
    };

    const toggleShow2 = () => {
        // Only allow toggling Project 2 if Project 1 is open
        if (show1) {
            setShow2(prev => !prev);
        }
    };

    const { ref: myRef1, inView: skills1 } = useInView({ triggerOnce: true });

    return (
        <section ref={myRef1} className=" custom_bg_2 3xl flex h-max justify-center items-center pb-8" id='Projects'>
            <section className='w-4/5 h-full flex flex-col '>
                <div className='w-full mt-32 3xl:px-16 2xl:px-16 xl:px-16 md:px-2 xs:px-2 xxs:px-2'>
                    <h1 className='custom_font_color_1 tracking-wider text-start pt-5 pb-2 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xl:text-2xl md:text-2xl  xs:text-xl xxs:text-xl 3xl:px-5 2xl:px-5 xl:px-5 md:px-0 xs:px-0 xxs:px-0' >Projects</h1>
                    <h3 className='text-white tracking-wider text-justify pb-2 capitlize font-normal 3xl:text-lg 2xl:text-base xl:text-base md:text-base xs:text-sm xxs:text-sm 3xl:px-5 2xl:px-5 xl:px-5 md:px-0 xs:px-0 xxs:px-0'>Here are some of the projects I &#39;ve worked on recently.</h3>
                </div>
                <div className='w-full'>
                    {skills1 && <div className={`grid pt-6 pb-6 mt-10 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 3xl:gap-x-14 2xl:gap-x-14 xl:gap-x-8 xs:gap-x-6 xxs:gap-x-6 3xl:px-14 2xl:px-14 xl:px-14 xs:px-0 xxs:px-0 3xl:gap-y-20 2xl:gap-y-20 xl:gap-y-20 xs:gap-y-8 xxs:gap-y-8`}>
                        {projectDetails.map((project, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: index * 1.2, ease: "easeInOut" }}
                                key={index}
                            >
                                <EventCard key={index} image={project.image} title={project.title} description={project.description} languages={project.languages} link={project.link} />
                            </motion.div>
                        ))}
                    </div>}
                </div>

                <div className='w-full flex justify-center items-center p-5'>
                    <button className='uppercase rounded-full px-3 p-2 custom_bg_1 text-white 3xl:text-base 2xl:text-sm xl:text-sm md:text-xs xs:text-xs xxs:text-xs' onClick={toggleShow1}>{show1 ? 'Show Less' : 'Show More'}</button>
                </div>
                <div className={` ${show1 ? "flex" : "hidden"} grid pt-6 pb-6 mt-10 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 3xl:gap-x-14 2xl:gap-x-14 xl:gap-x-8 xs:gap-x-6 xxs:gap-x-6 3xl:px-14 2xl:px-14 xl:px-14 xs:px-0 xxs:px-0 3xl:gap-y-20 2xl:gap-y-20 xl:gap-y-20 xs:gap-y-8 xxs:gap-y-8`}>
                    {projectDetails2.map((project, index) => (
                        <EventCard key={index} image={project.image} title={project.title} description={project.description} languages={project.languages} link={project.link} />
                    ))}
                </div>

                {showbutton2 && (
                    <div className='w-full flex justify-center items-center p-5'>
                        <button className='uppercase rounded-full px-3 p-2 custom_bg_1 text-white 3xl:text-base 2xl:text-sm xl:text-sm md:text-xs xs:text-xs xxs:text-xs' onClick={toggleShow2}>{show2 ? 'Show Less' : 'Show More'}</button>
                    </div>
                )}
                {show2 && (
                    <div className={` ${show2 ? "flex" : "hidden"} grid pt-6 pb-6 mt-10 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 3xl:gap-x-14 2xl:gap-x-14 xl:gap-x-8 xs:gap-x-6 xxs:gap-x-6 3xl:px-14 2xl:px-14 xl:px-14 xs:px-0 xxs:px-0 3xl:gap-y-20 2xl:gap-y-20 xl:gap-y-20 xs:gap-y-8 xxs:gap-y-8`}>
                        {projectDetails3.map((project, index) => (
                            <EventCard key={index} image={project.image} title={project.title} description={project.description} languages={project.languages} link={project.link} />
                        ))}
                    </div>
                )}
            </section>
        </section>
    )
}

const EventCard = ({ image, title, description, languages, link }) => {
    const navigateToLink = (link) => {
        window.open(link, '_blank');
    };
    return (
        <div className='event_shadow w-full h-full min_height_project rounded-xl border-2 border-sky-500 p-4 px-6 hover:bg-gray-950 '>
            <div className='w-full 3xl:h-2/6 2xl:3/6 xl:3/6'>
                {image &&
                    <img className='w-full h-full rounded object-cover  ' src={image} alt="tumbnail" />
                }
            </div>
            <div className='w-full'>
                <h1 className='custom_font_color_1 tracking-wide pt-2 flex justify-center text-center capitalize font-medium 
                    3xl:text-lg 2xl:text-md xl:text-md 
                    3xl:px-4 2xl:px-2 xl:px-0 md:px-0 xs:px-0 xxs:px-0'>
                    {title}
                </h1>
            </div>

            <div className='w-full'>
                <p className='text-white pt-2 pb-2 indent-6 text-justify 
                    3xl:text-base 2xl:text-sm xl:text-sm md:text-xs xs:text-xs xxs:text-xs
                    3xl:px-2 2xl:px-2 xl:px-0 md:px-0 xs:px-0 xxs:px-0'>
                    {description}
                </p>
            </div>

            <div className='w-full grid gap-x-2 px-2 gap-y-2 justify-center 
                3xl:grid-cols-4 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 xs:grid-cols-3 xxs:grid-cols-3'>
                {languages.map((pl, index) => (
                    <h4 key={index} className='text-white text-center w-full p-0 rounded-full h-max justify-center items-center uppercase 
                        3xl:text-xs 2xl:text-xs xl:text-xxs md:text-xxs xs:text-xxs xxs:text-xxs'
                        style={{ backgroundColor: backgroundColorBasedOnLanguage(pl) }}>
                        {pl}
                    </h4>
                ))}
            </div>

            <div className='w-full mt-5 text-center'>
                <button className='rounded-full px-3 p-2 custom_bg_1 text-white 
                    3xl:text-base 2xl:text-sm xl:text-sm md:text-xs xs:text-xs xxs:text-xs'
                    onClick={() => navigateToLink(link)}>
                    View Project
                </button>
            </div>

        </div>
    )
}

EventCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
};


export default Projects

