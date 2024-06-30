// import React from 'react';
import './custom.css';
import Navigate from './Navigation';
import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

function NavHeader () {

    const [navBar, setNavBar] = useState(false);

    function toggleMenu() {
        setNavBar(!navBar);
    }

    const scrollTo = (id, e) => {
        e.preventDefault();
        Navigate(id, e); // Replace 'aboutMeSection' with the actual ID of your section in aboutme.jsx
        
    };
    
    return (
        <nav className='custom_bg_1 flex 3xl:flex-row 2xl:flex-row xl:flex-row xs:flex-col xxs:flex-col justify-around items-center 3xl:px-16 2xl:px-16 xl:px-16 xs:px-4 xxs:px-4 3xl:w-4/5 2xl:w-4/5 xl:w-4/5 xs:w-full xxs:w-full'>
            <div className='3xl:w-1/3 2xl:w-1/3 xl:w-1/3 xs:w-full xxs:w-full h-14 flex justify-start items-center'>
                <div className='h-10 flex items-center 3xl:w-36 2xl:w-36 xl:w-36 xs:w-2/4 xxs:w-2/4 justify-start 3xl:px-4 2xl:px-4 xl:px-4 xs:px-0 xxs:px-0'>
                    <a href="#Home" className='custom_font_color_1 uppercase font-black hover:border-b-2 text-white tracking-widest 3xl:text-2xl 2xl:text-xl xl:text-xl xs:text-2xl xxs:text-2xl' onClick={(e) => {scrollTo('Home', e);}}>JV</a>
                </div>
                <div className="text-4xl cursor-pointer block text-white w-2/4 3xl:hidden 2xl:hidden xl:hidden xs:flex xxs:flex justify-end">
                <button name="menu" onClick={(e) => toggleMenu(e)}>
                    <i className='bx bx-menu '></i>
                </button>
            </div>
            </div>

            <div className={`navheader columns-6 justify-between items-center gap-y-10 3xl:py-0 2xl:py-0 xl:py-0 xs:py-8 xxs:py-8 3xl:flex 2xl:flex xl:flex ${navBar ? "xs:flex xxs:flex" : "xs:hidden xxs:hidden"} 3xl:flex-row 2xl:flex-row xl:flex-row xs:flex-col xxs:flex-col 3xl:w-2/3 2xl:w-2/3 xl:w-2/3 xs:w-full xxs:w-full custom_bg_1 transition-all ease-in duration-500`}>
                    {/* <div className='h-10 w-10 p-2 custom_bg_1 flex justify-center items-center'></div> */}

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#AboutMe" className='uppercase hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg xl:text-base xs:text-xl xxs:text-xl text-white' onClick={(e) => {scrollTo('AboutMe', e); toggleMenu();}}>About Me</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Experience" className='custom_font_color_1 uppercase font-semibold hover:border-b-2 text-white tracking-widest 3xl:text-xl 2xl:text-lg xl:text-base xs:text-xl xxs:text-xl' onClick={(e) => {scrollTo('Experience', e); toggleMenu();}}>Experience</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Projects" className=' uppercase text-white  hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg  xl:text-base xs:text-xl xxs:text-xl' onClick={(e) => {scrollTo('Projects', e); toggleMenu();}}>Projects</a>
                    </div>

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Skills" className='custom_font_color_1 uppercase font-semibold hover:border-b-2 text-white tracking-widest 3xl:text-xl 2xl:text-xl xl:text-base xs:text-xl xxs:text-xl' onClick={(e) => {scrollTo('Skills', e); toggleMenu();}}>Skills</a>
                    </div>

                    {/* <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Home" className=' text-xl text-white uppercase  hover:border-b-2 border-sky-500' onClick={smoothScroll}>Certificates</a>
                    </div> */}

                    <div className='h-10 w-38 p-2 custom_bg_1 flex justify-center items-center'>
                        <a href="#Contact" className='text-white uppercase font-semibold hover:border-b-2 border-sky-500 tracking-widest 3xl:text-xl 2xl:text-lg xl:text-base xs:text-xl xxs:text-xl' onClick={(e) => {scrollTo('Contact', e); toggleMenu();} }>Contact</a>
                    </div>
            </div>
            
        </nav>
    )
}

export default NavHeader