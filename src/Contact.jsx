import React from 'react';

import Animation from './Animation.jsx';
import laptop from '../public/laptop.json';

import './custom.css';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Contact () {

    return (
        <section className=" custom_bg_1 3xl h-full flex flex-col items-center" id='Contact'>
            <section className='w-4/5 flex flex-col pt-10 pb-0 3xl:h-4/6 2xl:h-4/6 xl:h-4/6 md:h-5/6 xs:h-5/6 xxs:h-5/6'>
                <div className='w-full h-full 3xl:px-16 2xl:px-16 xl:px-16 md:px-2 xs:px-2 xxs:px-2  '>
                    <h1 className='custom_font_color_1 tracking-wider text-start uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xl:text-2xl md:text-2xl xs:text-xl xxs:text-xl 3xl:px-5 2xl:px-5 xl:px-5 md:px-0 xs:px-0  xxs:px-0 3xl:mt-20 2xl:mt-20 xl:mt-20 md:my-10 xs:my-10 xxs:my-10' >Contact</h1>
                    <div className='flex h-2/3 mt-2 3xl:flex-row 2xl:flex-row xl:flex-row xs:flex-col-reverse xxs:flex-col-reverse'>
                        <div className=' pb-5 px-5 flex flex-col items-start uppercase 3xl:text-xl 2xl:text-lg xl:text-lg md:text-lg xs:text-base xxs:text-base 3xl:mt-2 2xl:mt-0 xl:mt-0 3xl:pt-14 2xl:pt-8 xl:pt-8 md:pt-4 xs:pt-4 xxs:pt-4 3xl:w-4/6 2xl:w-4/6 xl:w-4/6 md:w-full xs:w-full xxs:w-full'>
                            <h3 className='text-white capitalize leading-8'>
                                Jilbert S. Vasquez
                            </h3>
                            <h3 className='text-white capitalizeleading-8'>
                                bs cpe
                            </h3>
                            <h3 className='text-white capitalize leading-8'>
                                Batangas City, Batangas 
                            </h3>
                            <br />
                            <h3 className='text-white lowercase leading-8 '>
                                jilbertvaquez02@gmail.com
                            </h3>
                        </div>
                        <div className=' flex justify-center items-center mx-auto 3xl:w-2/6 2xl:w-2/6 xl:w-2/6 md:w-4/6 xs:w-5/6 xxs:w-5/6 '>
                            <Animation animationData={laptop} />
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full bg-sky-800  items-end 3xl:flex 2xl:flex xl:flex md:flex xs:flex xxs:flex 3xl:h-2/6 2xl:h-2/6 xl:h-2/6 md:h-1/6 xs:h-1/6 xxs:h-1/6'>
                <div className='w-full h-1/3 bg-white flex justify-center items-center mb-10'>
                    <SocialMedia />
                </div>
            </div>
            <footer className='w-full custom_bg_1 flex justify-center items-center  3xl:h-10 2xl:h-10 xl:h-10 md:h-10 xs:h-10 xxs:h-10 '>
                <h1 className='uppercase text-white text-lg xxs:text-sm'>copyright &copy; 2024</h1>
            </footer>
        </section>
    )
}

const Accounts = [
    {
        socialmedia: 'facebook',
        image: 'facebook.png',
        link: 'https://www.facebook.com/jilbert.vasquez/',
    },
    {
        socialmedia: 'linkedin',
        image: 'linkedin.png',
        link: 'https://www.linkedin.com/in/jilbert-vasquez-07894727a/',
    },
    {
        socialmedia: 'gmail',
        image: 'gmail.png',
        link: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMhGLjNnBxWWgvQBPrCMpxKdmdDfXxSdgFsDzfKNRJSgshMhhqzwfPKwprXmHPPsqhMNzqQ',
    },
    {
        socialmedia: 'github',
        image: 'github.png',
        link: 'https://github.com/JilbertVasquez',
    },
    {
        socialmedia: 'tiktok',
        image: 'tiktok.png',
        link: 'https://www.tiktok.com/@jilbertvasquez',
    },
];

const SocialMedia = () => {

    const {ref: myRef1, inView: socMed} = useInView({ triggerOnce: true });

    return (
        <div ref={myRef1} className='w-full h-full bg-white '>
            {/* {Accounts.map((socmed, index) => (
                <div className='rounded-full h-2/4' key={index}>
                    <a className='h-full w-full' href={socmed.link} target="_blank" rel="noopener noreferrer">
                        <img className='w-full h-full socmed' src={socmed.image} alt={socmed.socialmedia} />
                    </a>
                </div>
            ))} */}
            {socMed && <div className='w-full h-full flex justify-center items-center gap-x-10 overflow-hidden'>
                {Accounts.map((socmed, index) => (
                    <motion.div
                    initial={{y: index % 2 == 0 ? '-200%' : '200%' }}
                    animate={{y: '0'}}
                    transition={{duration: 1, delay: index * 0.5, ease: "easeInOut"}}
                    className='rounded-full h-2/4' 
                    key={index}
                    >
                        <a className='h-full w-full' href={socmed.link} target="_blank" rel="noopener noreferrer">
                            <img className='w-full h-full socmed' src={socmed.image} alt={socmed.socialmedia} />
                        </a>
                    </motion.div>
                ))}
            </div>}
        </div>
    );
}

export default Contact
