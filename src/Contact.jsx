import React from 'react';

import Animation from './Animation.jsx';
import laptop from '../public/laptop.json';

import './custom.css';

function Contact () {

    return (
        <section className="container custom_bg_2 3xl h-full flex flex-col items-center " id='Contact'>
            <section className='w-4/5 h-4/6 flex flex-col pt-10 p-5 pb-0'>
                <div className='w-full h-full px-16 '>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 mt-20 text-3xl uppercase font-semibold' >Contact</h1>
                    <div className='flex h-2/3 mt-2 '>
                        <div className='w-4/6 pt-14 pb-5 px-5 flex flex-col items-start uppercase'>
                            <h3 className='text-white text-xl capitalize mt-2 leading-8'>
                                Jilbert S. Vasquez
                            </h3>
                            <h3 className='text-white text-xl capitalize mt-2 leading-8'>
                                bs cpe
                            </h3>
                            <h3 className='text-white text-xl capitalize mt-2 leading-8'>
                                Batangas City, Batangas 
                            </h3>
                            <br />
                            <h3 className='text-white  text-xl capitalize mt-2 leading-8 '>
                                jilbertvaquez02@gmail.com
                            </h3>
                        </div>
                        <div className='w-2/6  pb-5 flex justify-center items-center '>
                            <Animation animationData={laptop} />
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full h-2/6 bg-sky-800  flex items-end '>
                <div className='w-full h-1/3 bg-white flex justify-center items-center mb-10'>
                    <SocialMedia />
                </div>
            </div>
            <footer className='h-10 w-full flex justify-center items-center custom_bg_2'>
                <h1 className='uppercase text-white text-lg'>copyright &copy; 2024</h1>
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
    return (
        <div className='w-full h-full bg-white flex justify-center items-center gap-x-10'>
            {Accounts.map((socmed, index) => (
                <div className='rounded-full h-2/4' key={index}>
                    <a className='h-full w-full' href={socmed.link} target="_blank" rel="noopener noreferrer">
                        <img className='w-full h-full socmed' src={socmed.image} alt={socmed.socialmedia} />
                    </a>
                </div>
))}
        </div>
    );
}

export default Contact
