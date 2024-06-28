
import React from 'react';
import Lottie from 'react-lottie';
// import animationData from './path/to/your/animation.json'; // Adjust the path to your animation JSON file

const Animation = ({animationData}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

return (
    <div className='w-full h-full flex justify-center items-center'>
        <Lottie 
            options={defaultOptions}
            height="125%"
            width="125%"
        />
    </div>
    );
};

export default Animation;
