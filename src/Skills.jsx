import React from 'react';

import './custom.css';

function Skills () {

    return (
        <section className="container custom_bg_1 3xl flex justify-center items-center " id='Skills'>
            <section className='w-4/5 flex flex-col bg-red-500'>
                <div className='w-full h-20 px-16 flex justify-center items-center bg-indigo-200 mt-14'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 pt-2 text-3xl uppercase font-semibold' >Skiilsset/TechStack</h1>
                </div>
                <EventCardContainer />
                <EventCardContainer />
            </section>
            
        </section>
    )
}

const EventCard = () => {
    return (
        <div className='w-28 flex flex-col p-5 rounded-xl custom_bg_1 border-sky-800 skill_shadow'>
            <img className='w-full h-full' src="html.png" alt="html" />
            <h3 className='text-white uppercase text-lg pt-4'>html</h3>
        </div>
    )
}

const EventCardContainer = () => {
    return (
        <div className='w-full flex flex-col bg-red-100'>
            <div className='w-full h-14 px-14 flex mt-12 justify-center items-center '>
                <h2 className='text-white tracking-wider text-start px-5 text-lg uppercase font-semibold' >Web Development</h2>
            </div>
            <div className='p-8 w-full px-40 pb-12 flex flex-wrap gap-10 justify-center items-center'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}


export default Skills