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
        <section className="custom_bg_1 container 3xl h-screen" id="Home">
            <nav className='bg-red-800 fixed w-screen h-14 flex justify-center items-center'>
                <div className='h-10 w-36 bg-white flex justify-center items-center'>
                    <a href="#Home" className='custom_font_color_1 text-2xl uppercase font-black' onClick={smoothScroll}>JV</a>
                </div>

            </nav>
        </section>
    )
}

export default Home

