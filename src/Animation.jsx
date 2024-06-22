
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
    <div>
        <Lottie 
            options={defaultOptions}
            height={450}
            width={450}
        />
    </div>
    );
};

export default Animation;
