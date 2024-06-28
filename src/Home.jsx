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
// may h-screen yung section con 
    return (
        <section className="con custom_bg_1 container 3xl flex justify-center" id="Home"> 
            <div className='head custom_bg_1 h-14 flex justify-around items-center z-10 border-b-2 border-sky-950'>
                <NavHeader />
            </div>
            <section className=' h-screen w-4/5 flex justify-center items-center mx-auto 3xl:flex-row 2xl:flex-row xs:flex-col '>
                <div className='  flex justify-center items-center bg-red-50 3xl:h-screen 2xl:h-screen xs:h-2/4  3xl:w-2/5 2xl:w-2/5 xs:full'>
                    <img className='my-pic rounded-full w-4/5 border-2 border-sky-500 ' src={jil1} alt="jil-pic" />
                </div>
                <div className=' w-3/5 flex justify-start items-center 3xl:2-screen 2xl:h-screen xs:h-2/4 3xl:px-20 2xl:px-20 xs:px-0 3xl:w-3/5 2xl:w-3/5 xs:w-full bg-red-500'>
                    <div className='w-full custom_bg_1 flex flex-col justify-start items-start 3xl:h-2/5 2xl:h-2/5 xs:h-full 3xl:px-8 2xl:px-8 xs:px-4'>
                        <h1 className='custom_font_color_1 capitalize font-medium pt-5 pb-1 3xl:text-3xl 2xl:text-3xl xs:text-xl'>Hello World, I'm</h1>
                        <h1 className='text-white capitalize font-medium pt-1 pb-2 3xl:text-5xl 2xl:text-5xl xs:text-2xl'>Jilbert S. Vasquez</h1>
                        <h1 className='custom_font_color_1 capitalize font-semibold tracking-wider pt-2 pb-1 3xl:text-3xl 2xl:text-3xl xs:text-lg'> 
                            <Typewriter 
                                loop={true}
                                words={['Computer Engineer', 'Web Developer', "Future Software Engineer"]}
                                typeSpeed={250}
                                delaySpeed={1500}
                            /><Cursor />
                        </h1>
                        <h1 className='text-white font-medium pt-1 pb-2 3xl:text-xl 2xl:text-xl xs:text-sm'> &lt; Welcome-to-my-personal-website /&gt; </h1>
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

