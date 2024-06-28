import React from 'react';
import Animation from './Animation.jsx';
import codingperson from '../public/codingperson.json';
function AboutMe () {

    return (
        <section className="container custom_bg_2 3xl h-4/5 flex justify-center items-center " id='AboutMe'>
            <section className='w-4/5 h-4/5 flex'>
                <div className='w-2/3 h-2/3  3xl:mt-14 3xl:px-16 2xl:mt-0 2xl:px-6'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 p-5 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl' >About Me</h1>
                    <p className='text-white text-justify indent-14 mt-2 leading-8 3xl:text-xl 2xl:text-lg'>
                    I am a graduating Computer Engineering student at Batangas State University in August 2024. 
                    I'm a shy yet talented engineer passionate about software development, art, and technology. 
                    I use my creativity to create designs and strong analytical skills to tackle the logical aspects of applications.
                    </p>
                    <br />
                    <p className='text-white text-justify indent-14 leading-8 3xl:text-xl 2xl:text-lg'>
                    Residing in Batangas City, Batangas, I am prepared to take on challenging software development projects. 
                    I am versatile, offering support in networks, a solid foundation in hardware, and full-stack capabilities in software.
                    </p>
                    
                    
                </div>
                <div className='w-1/3 h-2/3 flex justify-center items-center '>
                    <Animation animationData={codingperson} />
                </div>
            </section>
        </section>
    )
}

export default AboutMe

