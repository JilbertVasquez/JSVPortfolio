import React from 'react';

import './custom.css';



function Projects () {

    return (
        <section className="container custom_bg_2 3xl flex justify-center items-center pb-8" id='Projects'>
            <section className='w-4/5 h-full flex flex-col'>
                <div className='w-full px-16 mt-32'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 pt-5 pb-2 text-3xl uppercase font-semibold' >Projects</h1>
                    <h3 className='text-white tracking-wider text-start px-5 pb-2 text-lg capitlize font-normal'>Here are some of the projects I've worked on recently.</h3>
                </div>
                <div className='bg-indigo-500 grid grid-cols-3 gap-x-14 gap-y-20 px-14 p-6 mt-10'>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </div>
            </section>
        </section>
    )
}

const EventCard = (image, title, description, languages, link) => {
    return (
        <div className='w-full h-full rounded bg-red-500 p-4 px-6'>
            <div className='w-full h-2/6'>
                <img className='w-full h-full' src="JV.png" alt="tumbnail" />
            </div>
            <div className='w-full bg-indigo-500'>
                <h1 className='custom_font_color_1 tracking-wide text-start px-4 pt-2 flex justify-center text-lg capitalize font-medium' >Personal Portfolio Personal</h1>
            </div>
            <div className='w-full h-2/6 bg-indigo-200'>
                <p className='custom_font_color_1 px-2 pt-2 text-base indent-6 text-justify capitalize' >Personal Portfolio Personal Portfolio Personal Portfolio</p>
            </div>
            <div className='w-full  bg-indigo-500 grid grid-cols-4 gap-x-2 px-2 gap-y-1 justify-center'>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >html</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >css</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >Javascript</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >React</h4>
                <h4 className='custom_font_color_1 w-full p-0 rounded-full h-max text-xs justify-center items-center uppercase bg-black' >Tailwind</h4>
            </div>
            <div className='w-full mt-2 bg-indigo-300'>
                <button className='rounded-full px-3 p-2 bg-black text-white'>Learn More</button>
            </div>
            
        </div>
    )
}


export default Projects

