import React from 'react';

import './custom.css';

function Home () {
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
        <section className="con custom_bg_1 container 3xl h-screen" id="Home">
            <nav className='head custom_bg_1 w-full h-14  columns-8 flex justify-around items-center px-20 z-10'>
                <div className='h-10 w-36 p-3 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className='custom_font_color_1 text-2xl uppercase font-black hover:border-b-2 text-white' onClick={smoothScroll}>JV</a>
                </div>

                <div className='h-10 w-10 p-2 custom_bg_1 flex justify-center items-center'>
                    
                </div>

                <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className='text-xl text-white uppercase hover:border-b-2 border-sky-500' onClick={smoothScroll}>About Me</a>
                </div>

                <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className='custom_font_color_1 text-xl uppercase font-semibold hover:border-b-2 text-white' onClick={smoothScroll}>Experience</a>
                </div>

                <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className=' text-xl uppercase text-white  hover:border-b-2 border-sky-500' onClick={smoothScroll}>Projects</a>
                </div>

                <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className='custom_font_color_1 text-xl uppercase font-semibold hover:border-b-2 text-white' onClick={smoothScroll}>Skills</a>
                </div>

                <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className=' text-xl text-white uppercase  hover:border-b-2 border-sky-500' onClick={smoothScroll}>Certificates</a>
                </div>

                <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                    <a href="#Home" className='custom_font_color_1 text-xl uppercase font-semibold hover:border-b-2 text-white' onClick={smoothScroll}>Contact</a>
                </div>

            </nav>
            
        </section>
    )
}

export default Home

