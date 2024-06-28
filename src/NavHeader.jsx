function NavHeader () {
    return (
        <nav className='custom_bg_1 w-4/5 h-14 columns-8 flex justify-around items-center'>
                    <div className='h-10 w-36 p-3 custom_bg_1 flex justify-start items-center'>
                        <a href="#Home" className='custom_font_color_1 text-2xl uppercase font-black hover:border-b-2 text-white tracking-widest' onClick={(e) => {scrollTo('Home', e);}}>JV</a>
                    </div>
                    <div className='h-10 w-10 p-2 custom_bg_1 flex justify-center items-center'>
                        
                    </div>

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
                </nav>
    )
}

export default NavHeader