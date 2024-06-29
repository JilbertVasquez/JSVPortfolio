// import React from 'react';
import './custom.css';
import Navigate from './Navigation';
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

function NavHeader () {
    const scrollTo = (id, e) => {
        Navigate(id, e); // Replace 'aboutMeSection' with the actual ID of your section in aboutme.jsx
    };
    function Menu(e){
        let list = document.querySelector('navheader');
        e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    }
    return (
        <nav className='custom_bg_1 w-4/5  columns-2 flex justify-around items-center 3xl:px-16 2xl:px-16 xs: px-2'>
            <div className='3xl:w-1/3 2xl:w-1/3 xs:w-full h-14 flex justify-center items-center'>
                <div className='h-10 px-4 flex items-center 3xl:w-36 2xl:w-36 xs:w-full 3xl:justify-start 2xl:justify-start xs:justify-center'>
                    <a href="#Home" className='custom_font_color_1 uppercase font-black hover:border-b-2 text-white tracking-widest 3xl:text-2xl 2xl:text-xl xs:text-5xl' onClick={(e) => {scrollTo('Home', e);}}>JV</a>
                </div>
            </div>

            <div className='navheader columns-6 justify-between items-center gap-y-10 3xl:flex 2xl:flex xs:hidden 3xl:flex-row 2xl:flex-row xs:flex-col 3xl:w-2/3 2xl:w-2/3 xs:w-full bg-red-500'>
                    {/* <div className='h-10 w-10 p-2 custom_bg_1 flex justify-center items-center'></div> */}

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#AboutMe" className='uppercase hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg xs:text-3xl text-white' onClick={(e) => {scrollTo('AboutMe', e);}}>About Me</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#" className='custom_font_color_1 uppercase font-semibold hover:border-b-2 text-white tracking-widest 3xl:text-xl 2xl:text-lg xs:text-3xl' onClick={(e) => {scrollTo('Experience', e);}}>Experience</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className=' uppercase text-white  hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg xs:text-3xl' onClick={(e) => {scrollTo('Projects', e);}}>Projects</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className='custom_font_color_1 uppercase font-semibold hover:border-b-2 text-white tracking-widest 3xl:text-xl 2xl:text-lg xs:text-3xl' onClick={(e) => {scrollTo('Skills', e);}}>Skills</a>
                    </div>

                    {/* <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className=' text-xl text-white uppercase  hover:border-b-2 border-sky-500' onClick={smoothScroll}>Certificates</a>
                    </div> */}

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className='text-white uppercase font-semibold hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg xs:text-3xl' onClick={(e) => {scrollTo('Contact', e);}}>Contact</a>
                    </div>
                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center 3xl:hidden 2xl:hidden xs:block'>
                        <a href="#Home" className='custom_font_color_1 uppercase font-semibold hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg xs:text-xl' onClick={(e) => {scrollTo('Contact', e);}}>Back</a>
                    </div>
            </div>
            <div class="text-4xl cursor-pointer mx-2 block bg-red-500 3xl:hidden 2xl:hidden xs:block">
                        <button name="menu" onclick={(e) => Menu(e)}>
                            <i class='bx bx-menu'></i>
                        </button>
                    </div>
        </nav>
    )
}

export default NavHeader