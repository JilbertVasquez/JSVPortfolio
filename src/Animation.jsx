
import React, {useRef, useEffect} from 'react';
import Lottie from 'react-lottie';
// import animationData from './path/to/your/animation.json'; // Adjust the path to your animation JSON file

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Animation = ({animationData}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // const myRef = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         if (entry.isIntersecting) {
    //         }
    //     });

    //     if (myRef.current) {
    //         observer.observe(myRef.current);
    //     }

    //     return () => {
    //         if (myRef.current) {
    //             observer.unobserve(myRef.current);
    //         }
    //     };
    // }, []);

    const {ref: myRef, inView: myElementIsVisible} = useInView({ triggerOnce: true });

return (
    <div ref={myRef} className='w-full h-full flex justify-center items-center overflow-hidden'>
        {myElementIsVisible && 
            <motion.div className='w-full h-full flex justify-center items-center overflow-hidden'
            initial={{x: '110vw'}}
            animate={{x: 0}}
            transition={{duration: 1.5, ease: "easeInOut"}}
            >
                <Lottie 
                    options={defaultOptions}
                    height="125%"
                    width="125%"
                />
            </motion.div>
        }
    </div>
    );
};

export default Animation;
