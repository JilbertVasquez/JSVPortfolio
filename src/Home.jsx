import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import './custom.css';
import Navigate from './Navigation';
import jil1 from './assets/jil1.jpg';
import NavHeader from './NavHeader';

import mycv from './assets/Vasquez_Jilbert_S_Resume.pdf';

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

    const smoothScroll = (event) => {
        event.preventDefault();
        const element = document.getElementById('Home');
        if (element) {
            element.scrollIntoView({
            behavior: 'smooth'
            });
        }
    };

    return (
        <section className="con custom_bg_1 container 3xl h-screen flex justify-center" id="Home">
            <div className='head custom_bg_1 h-14 flex justify-around items-center z-10 border-b-2 border-sky-950'>
                <NavHeader />
            </div>
            <section className=' h-screen w-4/5 flex justify-center items-center mx-auto'>
                <div className=' h-screen w-2/5 flex justify-center items-center'>
                    <img className='my-pic rounded-full w-4/5 border-2 border-sky-500 ' src={jil1} alt="jil-pic" />
                </div>
                <div className=' h-screen w-3/5 flex justify-start items-center px-20'>
                    <div className=' h-2/5 w-full custom_bg_1 flex flex-col justify-start items-start px-8'>
                        <h1 className='custom_font_color_1 capitalize font-medium text-3xl pt-5 pb-1'>Hello World, I'm</h1>
                        <h1 className='text-white capitalize font-medium text-5xl pt-1 pb-2'>Jilbert S. Vasquez</h1>
                        <h1 className='custom_font_color_1 capitalize font-semibold tracking-wider text-3xl pt-2 pb-1'> 
                            <Typewriter 
                                loop={true}
                                words={['Computer Engineer', 'Web Developer', "Future Software Engineer"]}
                                typeSpeed={250}
                                delaySpeed={1500}
                            /><Cursor />
                        </h1>
                        <h1 className='text-white font-medium text-xl pt-1 pb-2'> &lt; Welcome-to-my-personal-website /&gt; </h1>
                        <div className='pt-6'>
                        <a href={mycv} download="Vasquez_Jilbert_S_Resume.pdf">
                            <button className='bg-sky-700 text-white px-4 py-2 rounded-lg'>Download CV</button>
                        </a>
                    </div>
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default Home

