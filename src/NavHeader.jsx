import React from 'react';
import './custom.css';
import Navigate from './Navigation';


function NavHeader () {
    const scrollTo = (id, e) => {
        Navigate(id, e); // Replace 'aboutMeSection' with the actual ID of your section in aboutme.jsx
    };
    return (
        <nav className='custom_bg_1 w-4/5 h-full columns-2 flex justify-around items-center px-16'>
            <div className=' w-1/3'>
            <div className='h-10 w-36 px-4 flex justify-start items-center'>
                        <a href="#Home" className='custom_font_color_1 text-2xl uppercase font-black hover:border-b-2 text-white tracking-widest' onClick={(e) => {scrollTo('Home', e);}}>JV</a>
                    </div>
            </div>
            <div className='columns-6 flex justify-between items-center w-2/3'>

                    
                    {/* <div className='h-10 w-10 p-2 custom_bg_1 flex justify-center items-center'>
                        
                    </div> */}

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#AboutMe" className='text-xl text-white uppercase hover:border-b-2 border-sky-500 tracking-widest' onClick={(e) => {scrollTo('AboutMe', e);}}>About Me</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#" className='custom_font_color_1 text-xl uppercase font-semibold hover:border-b-2 text-white tracking-widest' onClick={(e) => {scrollTo('Experience', e);}}>Experience</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className=' text-xl uppercase text-white  hover:border-b-2 border-sky-500 tracking-widest' onClick={(e) => {scrollTo('Projects', e);}}>Projects</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className='custom_font_color_1 text-xl uppercase font-semibold hover:border-b-2 text-white tracking-widest' onClick={(e) => {scrollTo('Skills', e);}}>Skills</a>
                    </div>

                    {/* <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className=' text-xl text-white uppercase  hover:border-b-2 border-sky-500' onClick={smoothScroll}>Certificates</a>
                    </div> */}

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className='text-white text-xl uppercase font-semibold hover:border-b-2 border-sky-500 tracking-widest ' onClick={(e) => {scrollTo('Contact', e);}}>Contact</a>
                    </div>
            </div>
                </nav>
    )
}

export default NavHeader