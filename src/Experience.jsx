import React from 'react';

import './custom.css';

function Experience () {

    return (
        <section className="container custom_bg_1 3xl h-4/5 flex justify-center items-center " id='Experience'>
            <section className='w-4/5 h-4/5 flex flex-col'>
                <div className='w-full h-20 px-16 flex justify-center items-center'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xs:text-xl xxs:text-xl 3xl:pt-2 2xl:pt-0' >Experience</h1>
                </div>

                <div className='flex flex-col gap-y-3 w-full my-5 pt-5 pb-5 3xl:mt-8 2xl:mt-10 3xl:px-16 2xl:px-16 xs:px-0 xxs:px-0'>
                    <div>
                        <div className='grid gap-x-2 item-center 3xl:grid-cols-3 2xl:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 3xl:gap-y-0 2xl:gap-y-0 xs:gap-y-2 xxs:gap-y-1'>
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
        <div className='mx-auto rounded-t-full bg-sky-500 h-full 3xl:w-2 2xl:w-2 xs:w-1 xxs:w-1'>

        </div>
    )
}

const Pillar = () => {
    return (
        <div className='mx-auto bg-sky-500 h-full 3xl:w-2 2xl:w-2 xs:w-1 xxs:w-1'>

        </div>
    )
}

const PillarBottom = () => {
    return (
        <div className='mx-auto rounded-b-full bg-sky-500 h-full 3xl:w-2 2xl:w-2 xs:w-1  xxs:w-1'>

        </div>
    )
}

const EventCard = ({title, date, companyname, location}) => {
    return (
        <div className='flex flex-col rounded-xl p-4 items-start w-full'>
            <h1 className='custom_font_color_1 tracking-wider text-start pt-2 pb-2 capitalize font-semibold 3xl:text-2xl 2xl:text-xl xs:text-base xxs:text-base'>{title}</h1>
            <h1 className='text-white 3xl:text-xl 2xl:text-lg xs:text-sm xxs:text-sm'>{date}</h1>
            <h1 className='text-white 3xl:text-xl 2xl:text-lg xs:text-sm xxs:text-sm'>{companyname}</h1>
            <h1 className='text-white 3xl:text-xl 2xl:text-lg xs:text-sm xxs:text-sm'>{location}</h1>
        </div>
    )
}

export default Experience