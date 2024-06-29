import React from 'react';
import Animation from './Animation.jsx';
import codingperson from '../public/codingperson.json';
function AboutMe () {

    return (
        <section className="container custom_bg_2 3xl flex justify-center items-center 3xl:h-4/5 2xl:h-4/5 xs:h-full" id='AboutMe'>
            <section className='w-4/5 flex 3xl:h-4/5 2xl:h-4/5 xs:h-4/5'>
                <div className=' w-full h-full '>
                    <h1 className='custom_font_color_1 tracking-wider text-start pt-5 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xs:text-xl 3xl:px-5 2xl:px-5 xs:px-0' >About Me</h1>
                    <div className='flex w-full h-full 3xl:flex-row 2xl:flex-row xs:flex-col-reverse'>
                        <div className='h-2/3 3xl:w-2/3 2xl:w-2/3 xs:w-full '>
                            <p className='text-white text-justify leading-8 3xl:indent-14 2xl:indent-14 xs:indent-8 3xl:text-xl 2xl:text-lg xs:text-sm 3xl:mt-16 2xl:mt-16 xs:mt-6'>
                                I am a graduating Computer Engineering student at Batangas State University in August 2024. 
                                I'm a shy yet talented engineer passionate about software development, art, and technology. 
                                I use my creativity to create designs and strong analytical skills to tackle the logical aspects of applications.
                            </p>
                            <br />
                            <p className='text-white text-justify indent-14 leading-8 3xl:text-xl 2xl:text-lg xs:text-sm'>
                            Residing in Batangas City, Batangas, I am prepared to take on challenging software development projects. 
                            I am versatile, offering support in networks, a solid foundation in hardware, and full-stack capabilities in software.
                            </p>
                        </div>
                        <div className=' flex justify-center items-center 3xl:w-1/3 2xl:w-1/3 xs:w-full 3xl:h-2/3 2xl:h-2/3 xs:h-1/3'>
                            <Animation animationData={codingperson} />
                        </div>
                    </div>
                </div>
                    
            </section>
        </section>
    )
}

export default AboutMe

