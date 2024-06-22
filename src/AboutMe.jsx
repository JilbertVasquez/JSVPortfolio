import React from 'react';
import Animation from './Animation.jsx';
import codingperson from '../public/codingperson.json';
function AboutMe () {

    return (
        <section className="container custom_bg_2 3xl h-4/5 flex justify-center items-center " id='AboutMe'>
            <section className='w-4/5 h-4/5 flex'>
                <div className='w-2/3 h-2/3 px-16 mt-14'>
                    <h1 className='custom_font_color_1 tracking-wider text-start px-5 p-5 text-3xl uppercase font-semibold' >About Me</h1>
                    <p className='text-white text-justify indent-14 text-xl  mt-2 leading-8'>
                    I am a graduating Computer Engineering student at Batangas State University in August 2024. 
                    I'm a reserved yet talented engineer passionate about software development, art, and technology. 
                    I use my creativity to craft designs and strong analytical skills to tackle the logical aspects of applications.
                    </p>
                    <br />
                    <p className='text-white text-justify indent-14 text-xl leading-8'>
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

