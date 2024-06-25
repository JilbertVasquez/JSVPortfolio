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
        title: 'Tools',
        languages: [
            { name: 'vscode',           image: 'logos/vscode.png' },
            { name: 'git',              image: 'logos/git.png' },
            { name: 'github',           image: 'logos/githublogo.png' },
            { name: 'netbeans',         image: 'logos/netbeans3.png' },
        ],
    },
    {
        title: 'Others',
        languages: [
            { name: 'autocad',          image: 'logos/cad.png' },
            { name: 'circuits',         image: 'logos/circuit.png' },
            { name: 'networking',       image: 'logos/network.png' },
            { name: 'vegas pro',        image: 'logos/v.png' },
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