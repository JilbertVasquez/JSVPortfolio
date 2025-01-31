import Lottie from 'react-lottie';
import airplane from '../public/airplane.json';
import './custom.css';

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: airplane,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-center custom_bg_1'>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
        </div>
    );
};

export default Loading;