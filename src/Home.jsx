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
            <section className=' h-screen w-full flex'>
                <div className=' h-screen w-2/5 flex justify-center items-center'>
                    <img className='my-pic rounded-full w-9/12 border-2 border-sky-500 ' src="src/assets/jil1.jpg" alt="jil-pic" />
                </div>
                <div className='custom_bg_1 h-screen w-3/5 flex justify-start items-center px-20'>
                    <div className='h-2/5 w-4/5 custom_bg_1 flex flex-col justify-start items-start px-8'>
                        <h1 className='text-white uppercase font-medium text-4xl pt-5 pb-1'>Hi I am</h1>
                        <h1 className='text-white uppercase font-medium text-5xl pt-1 pb-2'>Jilbert S. Vasquez</h1>
                        <h1 className='custom_font_color_1 uppercase font-semibold tracking-wider text-4xl pt-2 pb-5'>Computer Engineer</h1>
                    </div>
                </div>
            </section>
            
        </section>
    )
}

export default Home

