import React from 'react';

import './custom.css';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Skillset = [
    {
        title: 'Web Development',
        languages: [
            { name: 'html',             image: 'logos/html.png' },
            { name: 'css',              image: 'logos/css.png' },
            { name: 'javascript',       image: 'logos/js.png' },
            { name: 'react',            image: 'logos/react.png' },
            { name: 'php',              image: 'logos/php.png' },
            { name: 'bootstrap',        image: 'logos/bootstrap.png' },
            { name: 'django',           image: 'logos/django.png' },
            { name: 'tailwind css',     image: 'logos/tailwind.png' },
            { name: 'mysql',            image: 'logos/mysql.png' },
        ],
    },
    {
        title: 'Application Development',
        languages: [
            { name: 'python tkinter',   image: 'logos/tkinter.png' },
            { name: 'java',             image: 'logos/java.png' },
            { name: 'c++',              image: 'logos/c.png' },
            { name: 'mysql',            image: 'logos/mysql.png' },
            { name: 'txt',              image: 'logos/file.png' },
            { name: 'excel',            image: 'logos/excel.png' },
        ],
    },
    {
        title: 'Tools / Platforms',
        languages: [
            { name: 'vscode',           image: 'logos/vscode.png' },
            { name: 'git',              image: 'logos/git.png' },
            { name: 'github',           image: 'logos/githublogo.png' },
            { name: 'netbeans',         image: 'logos/netbeans3.png' },
            { name: 'netlify',         image: 'logos/netlify.png' },
        ],
    },
    {
        title: 'Others',
        languages: [
            { name: 'autocad',          image: 'logos/cad.png' },
            { name: 'circuits',         image: 'logos/circuit.png' },
            { name: 'networking',       image: 'logos/network.png' },
            { name: 'vegas pro',        image: 'logos/v.png' },
            { name: 'circuitverse',        image: 'logos/circuitverse.png' },
            { name: 'tinkercad',        image: 'logos/tinkercad_logo.png' },
        ],
    },
];

function Skills () {

    return (
        <section className=" custom_bg_1 3xl h-max flex justify-center items-center" id='Skills'>
            <section className='w-4/5 flex flex-col'>
                <div className='w-full h-20 px-16 flex justify-center items-center mt-14'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 pt-2 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xl:text-2xl md:text-2xl xs:text-xl xxs:text-xl' >Skiilsset/TechStack</h1>
                </div>

                {Skillset.map((skill, index) => (
                    <EventCardContainer key={index} skillset={skill} />
                ))}

                {/* <EventCardContainer /> */}
                {/* <EventCardContainer /> */}
            </section>
            
        </section>
    )
}

const EventCard = ({name, image}) => {
    return (
        <div className=' flex flex-col items-center justify-center rounded-xl custom_bg_1 skill_shadow 3xl:w-32 2xl:w-32 xl:w-32 md:w-28 xs:w-24 xxs:w-20 3xl:p-5 2xl:p-5 xl:p-5 xs:pt-4 xxs:pt-4 hover:scale-105 overflow-hidden'>
            <img className='h-full 3xl:w-full 2xl:w-4/5 xl:w-4/5 md:w-3/5 xs:w-3/5 xxs:w-3/5' src={image} alt="tumbnail" />
            <h3 className='text-white uppercase h-14  flex items-center justify-center 3xl:pt-2 2xl:pt-2 xl:pt-2 md:pt-0 xs:pt-0 xxs:pt-0 3xl:text-sm 2xl:text-sm xl:text-sm md:text-xs xs:text-xs xxs:text-xxs'>{name}</h3>
        </div>
    )
}

const EventCardContainer = ({skillset}) => {
    const {ref: myRef1, inView: skills1} = useInView({ triggerOnce: true });

    return (
        <div className='w-full flex flex-col'>
            <div ref={myRef1} className='w-full h-14  flex mt-12 justify-center items-center 3xl:px-14 2xl:px-14 xl:px-14 md:px-0 xs:px-0 xxs:px-0'>
                <h2 className='text-white tracking-wider w-full text-center uppercase font-semibold 3xl:text-lg 2xl:text-lg xl:text-lg md:text-lg xs:text-base xxs:text-base' >{skillset.title}</h2>
                {/* {skillset.map((skill, index) => (
                    <h2 key={index} className='text-white tracking-wider text-start px-5 text-lg uppercase font-semibold' >{skill.title}</h2>
                ))} */}
            </div>
            {skills1 && <div className='pt-8 w-full  pb-10 flex flex-wrap justify-center items-center 3xl:px-24 2xl:px-24 xl:px-6 md:px-0 xs:px-0 xxs:px-0 3xl:gap-10 2xl:gap-10 xl:gap-6 md:gap-3 xs:gap-2 xxs:gap-4 overflow-hidden'>
                {skillset.languages.map((skills, index) => (
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: index * 0.5, ease: "easeInOut"}}
                    >
                        <EventCard key={index} name={skills.name} image={skills.image} />
                    </motion.div>
                ))}
            </div>}
        </div>
    )
}


export default Skills