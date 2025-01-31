import PropTypes from 'prop-types';
import './custom.css';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Experience () {

    const {ref: myRef1, inView: experience1} = useInView({ triggerOnce: true });
    const {ref: myRef2, inView: experience2} = useInView({ triggerOnce: true });
    const {ref: myRef3, inView: experience3} = useInView({ triggerOnce: true });

    return (
        <section className=" custom_bg_1 3xl flex justify-center items-center " id='Experience'>
            <section className='w-4/5 flex flex-col'>
                <div className='w-full h-20 px-16 flex justify-center items-center'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xl:text-2xl md:text-2xl xs:text-xl xxs:text-xl 3xl:pt-2 2xl:pt-0 xl:pt-0 ' >Experience</h1>
                </div>

                <div className='flex flex-col gap-y-3 w-full my-5 pt-5 pb-5 3xl:mt-8 2xl:mt-10 xl:mt-10 3xl:px-16 2xl:px-16 xl:px-16 md:px-0 xs:px-0 xxs:px-0 overflow-hidden'>
                    <div>
                        <div className=' grid gap-x-2 item-center 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 3xl:gap-y-0 2xl:gap-y-0 xl:gap-y-0 md:gap-y-0 xs:gap-y-2 xxs:gap-y-1 overflow-hidden'>
                            <div ref={myRef1}>
                                {experience1 && <motion.div
                                initial={{x: '-100%'}}
                                animate={{x: 0}}
                                transition={{duration: 0.75, delay: 1.25, ease: "easeInOut"}}
                                > 
                                    <EventCard title="Web Developer Intern" date="Feb 2024 - Apr 2024" companyname="ICT Services Alangilan Campus" location="BatStateU, Batangas City, Batangas" />
                                </motion.div>}
                            </div>
                            {experience1 && <motion.div
                            initial={{y: '-100%'}}
                            animate={{y: 0}}
                            transition={{duration: 1, delay: 1, ease: "easeInOut"}}
                            className=" overflow-hidden"
                            >
                                <PillarTop />
                            </motion.div>}
                            <div></div>

                            <div></div>
                            {experience2 && <motion.div
                            initial={{y: '-200%'}}
                            animate={{y: 0}}
                            transition={{duration: 1.5, delay: 1.10, ease: "easeInOut"}}
                            className=" overflow-hidden"
                            >
                                <Pillar />
                            </motion.div>}
                            <div ref={myRef2}>
                                {experience2 && <motion.div
                                initial={{x: '100%'}}
                                animate={{x: 0}}
                                transition={{duration: 0.75, delay: 1.75, ease: "easeInOut"}}
                                > 
                                    <EventCard title="Freelance Developer" date="Oct 2022 - Feb 2024" companyname="Self-Employed" location="Batangas City, Batangas" />
                                </motion.div>}
                            </div>

                            <div ref={myRef3}>
                                {experience3 && <motion.div
                                initial={{x: '-100%'}}
                                animate={{x: 0}}
                                transition={{duration: 0.75, delay: 2.25, ease: "easeInOut"}}
                                > 
                                    <EventCard title="Freelance AutoCAD Drafter" date="Apr 2021 - May 2021" companyname="Self-Employed" location="Batangas City, Batangas" />
                                </motion.div>}
                            </div>
                            {experience3 && <motion.div
                            initial={{y: '-300%'}}
                            animate={{y: 0}}
                            transition={{duration: 2, delay: 0.95, ease: "easeInOut"}}
                            className=" overflow-hidden"
                            >
                                <PillarBottom />
                            </motion.div>}
                            <div></div>
                            
                            
                        </div>
                    </div>
                </div>

            </section>
            
        </section>
    )
}

const PillarTop = () => {
    return (
        <div className='mx-auto rounded-t-full bg-sky-500 h-full 3xl:w-2 2xl:w-2 xl:w-2 md:w-1 xs:w-1 xxs:w-1'>

        </div>
    )
}

const Pillar = () => {
    return (
        <div className='mx-auto bg-sky-500 h-full 3xl:w-2 2xl:w-2  xl:w-2 md:w-1 xs:w-1 xxs:w-1'>

        </div>
    )
}

const PillarBottom = () => {
    return (
        <div className='mx-auto rounded-b-full bg-sky-500 h-full 3xl:w-2 2xl:w-2 xl:w-2 md:w-1 xs:w-1  xxs:w-1'>

        </div>
    )
}

const EventCard = ({title, date, companyname, location}) => {
    return (
        <div className='flex flex-col rounded-xl p-4 items-start w-full'>
            <h1 className='custom_font_color_1 tracking-wider text-start pt-2 pb-2 capitalize font-semibold 3xl:text-2xl 2xl:text-xl xl:text-xl xs:text-base xxs:text-base'>{title}</h1>
            <h1 className='text-white text-start 3xl:text-xl 2xl:text-lg xl:text-base md:text-base xs:text-sm xxs:text-sm'>{date}</h1>
            <h1 className='text-white text-start 3xl:text-xl 2xl:text-lg xl:text-base md:text-base xs:text-sm xxs:text-sm'>{companyname}</h1>
            <h1 className='text-white text-start 3xl:text-xl 2xl:text-lg xl:text-sm md:text-sm xs:text-sm xxs:text-sm'>{location}</h1>
        </div>
    )
}

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    companyname: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default Experience