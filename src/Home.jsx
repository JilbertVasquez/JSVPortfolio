// import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import './custom.css';
import Navigate from './Navigation';
import jil1 from './assets/jil1.jpg';
import NavHeader from './NavHeader';
import React, { useState } from 'react';

import mycv from './assets/Vasquez_Jilbert_S_Resume.pdf';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Home () {
    // const {text} = useTypewriter({
    //     words: ['Computer Engineer', 'Web Developer', "Future Software Engineer"],
    //     loop: true,
    //     deleteSpeed: 50,
    //     typeSpeed: 100,
    // });

    const scrollTo = (id, e) => {
        Navigate(id, e); // Replace 'aboutMeSection' with the actual ID of your section in aboutme.jsx
    };

    const {ref: myRef1, inView: hello} = useInView({ triggerOnce: true });

    return (
        <section ref={myRef1} className="con custom_bg_1 h-screen w-full flex justify-center" id="Home"> 
            <div className='head custom_bg_1 flex justify-center items-center z-10 border-b-2 border-sky-950 '>
                <NavHeader />
            </div>
            
            <section className=' h-screen w-4/5 flex justify-center items-center mx-auto 3xl:flex-row 2xl:flex-row xl:flex-row md:flex-col sm:md:flex-col xs:flex-col xxs:flex-col'>
                <div className='  flex justify-center items-center 3xl:h-screen 2xl:h-screen xl:h-2/4 md:h-2/4 sm:h-3/4 xs:h-3/4 xxs:h-3/4  3xl:w-2/5 2xl:w-2/5 xl:w-2/5 md:w-3/4 sm:w-full xs:w-full md:pt-14'>
                {hello && <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1, delay: 0, ease: "easeInOut"}} className="flex justify-center items-center">
                    <img className='my-pic  rounded-full w-4/5 border-2 border-sky-500 ' src={jil1} alt="jil-pic" />
                </motion.div> }
                </div>
                <div className=' w-3/5 flex justify-start items-center 3xl:2-screen 2xl:h-screen xl:h-screen md:h-2/4 xs:h-2/4 xxs:h-2/4 3xl:px-20 2xl:px-20 xl:px-20 md:px-0 xs:px-0 xxs:px-0 3xl:w-3/5 2xl:w-3/5 xl:w-3/5  md:w-full xs:w-full xxs:w-full'>
                    <div className='w-full custom_bg_1 flex flex-col justify-start items-start 3xl:h-2/5 2xl:h-2/5 xl:h-2/5 md:h-full xs:h-full xxs:h-full 3xl:px-8 2xl:px-8 xs:px-4 xxs:px-0 '>
                        
                        {hello && <motion.div 
                            initial={{y: '100%', opacity: 0}}
                            animate={{y: '0', opacity: 1}}
                            transition={{duration: 1, delay: 0.5, ease: "easeInOut"}}>
                                <h1 className=' custom_font_color_1 capitalize font-medium pt-5 pb-1 3xl:text-3xl 2xl:text-3xl xl:text-2xl md:text-2xl xs:text-xl'>Hello World, I'm</h1>
                        </motion.div>}
                        {hello && <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1.5, ease: "easeInOut"}}>
                            <h1 className='text-white capitalize font-medium pt-1 pb-2 3xl:text-5xl 2xl:text-5xl xl:text-4xl  md:text-4xl xs:text-2xl xxs:text-2xl '>Jilbert S. Vasquez</h1>
                            </motion.div> }
                        <h1 className='custom_font_color_1 capitalize font-semibold tracking-wider pt-2 pb-1 3xl:text-3xl 2xl:text-3xl xl:text-2xl md:text-2xl xs:text-lg  xxs:text-lg'> 
                            <Typewriter 
                                loop={true}
                                words={['Computer Engineer', 'Web Developer', "Future Software Engineer"]}
                                typeSpeed={250}
                                delaySpeed={1500}
                            /><Cursor />
                        </h1>
                        {hello && <motion.div
                            initial={{y: '-100%', opacity: 0}}
                            animate={{y: '0', opacity: 1}}
                            transition={{duration: 1, delay: 0.5, ease: "easeInOut"}}>
                            <h1 className='text-white font-medium pt-1 pb-2 3xl:text-xl 2xl:text-xl xl:text-lg md:text-lg xs:text-sm xxs:text-xs'> &lt; Welcome-to-my-personal-website /&gt; </h1>
                        </motion.div>}
                        <div className='pt-6'>
                        {hello && <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1, delay: 1.5, ease: "easeInOut"}}>
                            <a href={mycv} download="Vasquez_Jilbert_S_Resume.pdf">
                                <button className='bg-sky-700 text-white px-4 py-2 rounded-lg'>Download CV</button>
                            </a>
                        </motion.div>}
                    </div>
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default Home

