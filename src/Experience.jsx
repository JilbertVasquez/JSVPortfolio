import React from 'react';

import './custom.css';

function Experience () {

    return (
        <section className="container custom_bg_1 3xl h-4/5 flex justify-center items-center " id='Experience'>
            <section className='w-4/5 h-4/5 flex flex-col'>
                <div className='w-full h-20 px-16 flex justify-center items-center'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl 3xl:pt-2 2xl:pt-0' >Experience</h1>
                </div>

                <div className='flex flex-col gap-y-3 w-full my-5 px-10  p-5 3xl:mt-8 2xl:mt-10'>
                    <div>
                        <div className='grid grid-cols-3 gap-x-2 item-center mx-auto'>
                            <EventCard title="Web Developer Intern" date="Feb 2024 - Apr 2024" companyname="ICT Services Alangilan Campus" location="BatStateU, Batangas City, Batangas" />
                            <PillarTop />
                            <div></div>
                            
                            <div className='h-full'>
                            </div>
                            <Pillar />
                            <div className='h-full'>
                            </div>

                            <div></div>
                            <PillarBottom />
                            <EventCard title="Programming Academic Commissioner" date="Oct 2022 - Feb 2024" companyname="Self-Employed" location="Batangas City, Batangas" />
                            
                            
                        </div>
                    </div>
                </div>

            </section>
            
        </section>
    )
}

const PillarTop = () => {
    return (
        <div className='mx-auto  rounded-t-full bg-sky-500 w-2 h-full'>

        </div>
    )
}

const Pillar = () => {
    return (
        <div className='mx-auto bg-sky-500 w-2 h-full'>

        </div>
    )
}

const PillarBottom = () => {
    return (
        <div className='mx-auto rounded-b-full bg-sky-500 w-2 h-full'>

        </div>
    )
}

const EventCard = ({title, date, companyname, location}) => {
    return (
        <div className='flex flex-col rounded-xl p-4 items-start w-full'>
            <h1 className='custom_font_color_1 tracking-wider text-start pt-2 pb-2 capitalize font-semibold 3xl:text-2xl 2xl:text-xl'>{title}</h1>
            <h1 className='text-white 3xl:text-xl 2xl:text-lg'>{date}</h1>
            <h1 className='text-white 3xl:text-xl 2xl:text-lg'>{companyname}</h1>
            <h1 className='text-white 3xl:text-xl 2xl:text-lg'>{location}</h1>
        </div>
    )
}

export default Experience