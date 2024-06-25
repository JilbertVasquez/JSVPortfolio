import React from 'react';

import './custom.css';

const Skillset = [
    {
        title: 'Web Development',
        languages: [
            { name: 'html',             image: 'public/logos/html.png' },
            { name: 'css',              image: 'public/logos/css.png' },
            { name: 'javascript',       image: 'public/logos/js.png' },
            { name: 'react',            image: 'public/logos/react.png' },
            { name: 'php',              image: 'public/logos/php.png' },
            { name: 'bootstrap',        image: 'public/logos/bootstrap.png' },
            { name: 'django',           image: 'public/logos/django.png' },
            { name: 'tailwind css',     image: 'public/logos/tailwind.png' },
            { name: 'mysql',            image: 'public/logos/mysql.png' },
        ],
    },
    {
        title: 'Application Development',
        languages: [
            { name: 'python tkinter',   image: 'public/logos/tkinter.png' },
            { name: 'java',             image: 'public/logos/java.png' },
            { name: 'c++',              image: 'public/logos/c.png' },
            { name: 'mysql',            image: 'public/logos/mysql.png' },
            { name: 'txt',              image: 'public/logos/file.png' },
            { name: 'excel',            image: 'public/logos/excel.png' },
        ],
    },
    {
        title: 'Tools',
        languages: [
            { name: 'vscode',           image: 'public/logos/vscode.png' },
            { name: 'git',              image: 'public/logos/git.png' },
            { name: 'github',           image: 'public/logos/githublogo.png' },
            { name: 'netbeans',         image: 'public/logos/netbeans3.png' },
        ],
    },
    {
        title: 'Others',
        languages: [
            { name: 'autocad',          image: 'public/logos/cad.png' },
            { name: 'circuits',         image: 'public/logos/circuit.png' },
            { name: 'networking',       image: 'public/logos/network.png' },
            { name: 'vegas pro',        image: 'public/logos/v.png' },
        ],
    },
];

function Skills () {

    return (
        <section className="container custom_bg_1 3xl flex justify-center items-center " id='Skills'>
            <section className='w-4/5 flex flex-col '>
                <div className='w-full h-20 px-16 flex justify-center items-center  mt-14'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 pt-2 text-3xl uppercase font-semibold' >Skiilsset/TechStack</h1>
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
        <div className='w-32 flex flex-col p-5 rounded-xl custom_bg_1  skill_shadow'>
            <img className='w-full h-full' src={image} alt="tumbnail" />
            <h3 className='text-white uppercase h-14 text-sm pt-2 flex items-center justify-center'>{name}</h3>
        </div>
    )
}

const EventCardContainer = ({skillset}) => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full h-14 px-14 flex mt-12 justify-center items-center '>
                <h2 className='text-white tracking-wider text-start px-5 text-lg uppercase font-semibold' >{skillset.title}</h2>
                {/* {skillset.map((skill, index) => (
                    <h2 key={index} className='text-white tracking-wider text-start px-5 text-lg uppercase font-semibold' >{skill.title}</h2>
                ))} */}
            </div>
            <div className='p-8 w-full px-26 pb-10 flex flex-wrap gap-10 justify-center items-center'>
                {skillset.languages.map((skills, key) => (
                    <EventCard name={skills.name} image={skills.image} />
                ))}
            </div>
        </div>
    )
}


export default Skills