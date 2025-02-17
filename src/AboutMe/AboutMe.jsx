import Animation from '../Design/Animation.jsx';

import codingperson from '/public/codingperson.json';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function AboutMe() {

    const { ref: myRef, inView: myElementIsVisible } = useInView({ triggerOnce: true });

    return (
        <section className="custom_bg_2 flex justify-center items-center h-4/5 3xl:h-4/5 2xl:h-4/5 xl:h-4/5 md:h-full xs:h-full xxs:h-full" id="AboutMe">
            <section className="w-4/5 flex h-4/5 3xl:h-4/5 2xl:h-4/5 xl:h-4/5 md:h-4/5 xs:h-4/5 xxs:h-4/5">
                <div className=' w-full h-full '>
                    <h1 className="custom_font_color_1 tracking-wider text-start pt-5 uppercase font-semibold 3xl:text-3xl 2xl:text-2xl xl:text-2xl md:text-2xl xs:text-xl xxs:text-xl 3xl:px-5 2xl:px-5 xl:px-5 md:px-5 xs:px-0 xxs:px-0">About Me</h1>
                    <div className="flex w-full h-full 3xl:flex-row 2xl:flex-row xl:flex-row md:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse overflow-hidden">
                        <div ref={myRef} className="h-2/3 3xl:w-2/3 2xl:w-2/3 xl:w-2/3 md:w-full xs:w-full xxs:w-full">
                            {myElementIsVisible && <motion.p className="text-white text-justify leading-8 3xl:indent-14 2xl:indent-14 xl:indent-10 md:indent-10 xs:indent-8 xxs:indent-6 3xl:text-xl 2xl:text-lg xl:text-lg md:text-lg xs:text-sm xxs:text-sm 3xl:mt-16 2xl:mt-16 xl:mt-16 md:mt-14 xs:mt-6 xxs:mt-6"
                                initial={{ x: '-100vw' }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                            >
                                {/* I am a graduating Computer Engineering student at Batangas State University in August 2024.
                                I am a shy yet talented engineer passionate about software development, art, and technology.
                                I use my creativity to create designs and strong analytical skills to tackle the logical aspects of applications. */}

                                I graduated with a Bachelor&apos;s in Computer Engineering from Batangas State University in August 2024.
                                 As a passionate and creative software developer, I bring artistic and analytical skills to my work, 
                                 tackling challenges in design and logic with equal enthusiasm.

                            </motion.p>}
                            <br />
                            {myElementIsVisible && <motion.p className="text-white text-justify leading-8 3xl:indent-14 2xl:indent-14 xl:indent-10 md:indent-10 xs:indent-8 xxs:indent-6 3xl:text-xl 2xl:text-lg xl:text-lg md:text-lg xs:text-sm xxs:text-sm"
                                initial={{ x: '-100vw' }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            >
                                {/* Residing in Batangas City, Batangas, I am prepared to take on challenging software development projects.
                                I am versatile, offering support in networks, a solid foundation in hardware, and full-stack capabilities in software. */}

                                I&#39;m currently working in the field and I still grasp any chance to develop. 
                                I have experience with full-stack apps, hardware, networks, and software development. 
                                As my career develops, I am thrilled to take on new challenges and learn more. 
                                
                            </motion.p>}
                        </div>
                        <div className="flex justify-center items-center 3xl:w-1/3 2xl:w-1/3 xl:w-1/3 md:w-full xs:w-full xxs:w-full 3xl:h-2/3 2xl:h-2/3 xl:h-2/3 md:h-2/4 sm:h-2/4 xs:h-1/3 xxs:h-1/3 pt-0 xxs:pt-5 pb-0 xxs:pb-5"
                        >
                            <Animation animationData={codingperson} />
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}

export default AboutMe

