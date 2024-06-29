import React from 'react';

import './custom.css';

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
        <section className="container custom_bg_1 3xl flex justify-center items-center" id='Skills'>
            <section className='w-4/5 flex flex-col '>
                <div className='w-full h-20 px-16 flex justify-center items-center mt-14'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 pt-2 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xs:text-xl' >Skiilsset/TechStack</h1>
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
        <div className=' flex flex-col items-center justify-center rounded-xl custom_bg_1 skill_shadow 3xl:w-32 2xl:w-32 xs:w-24 3xl:p-5 2xl:p-5 xs:p-2'>
            <img className='h-full 3xl:w-full 2xl:w-4/5 xs:w-3/5' src={image} alt="tumbnail" />
            <h3 className='text-white uppercase h-14  flex items-center justify-center 3xl:pt-2 2xl:pt-2 xs:pt-0 3xl:text-sm 2xl:text-sm xs:text-xs'>{name}</h3>
        </div>
    )
}

const EventCardContainer = ({skillset}) => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full h-14 bg-indigo-500 flex mt-12 justify-center items-center 3xl:px-14 2xl:px-14 xs:px-0'>
                <h2 className='text-white tracking-wider w-full text-center bg-red-500 uppercase font-semibold 3xl:text-lg 2xl:text-lg xs:text-base' >{skillset.title}</h2>
                {/* {skillset.map((skill, index) => (
                    <h2 key={index} className='text-white tracking-wider text-start px-5 text-lg uppercase font-semibold' >{skill.title}</h2>
                ))} */}
            </div>
            <div className='pt-8 w-full bg-indigo-100 pb-10 flex flex-wrap justify-center items-center 3xl:px-24 2xl:px-24 xs:px-0 3xl:gap-10 2xl:gap-10 xs:gap-2'>
                {skillset.languages.map((skills, index) => (
                    <EventCard key={index} name={skills.name} image={skills.image} />
                ))}
            </div>
        </div>
    )
}


export default Skills