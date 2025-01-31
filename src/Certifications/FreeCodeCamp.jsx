import "../custom.css";

import Responsive_Web_Design_Certificate from "/certs/FreeCodeCamp/Responsive_Web_Design_Certificate.png";
import JavaScript_Certificate from "/certs/FreeCodeCamp/JavaScript_Certificate.png";

import CertContainer from "./CertContainer.jsx";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FreeCodeCamp() {
    const freecodecampCert = [
        {
            name: "Responsive Web Design",
            image: Responsive_Web_Design_Certificate,
            link: "https://www.freecodecamp.org/certification/jilbertvasquez/responsive-web-design",
        },
        {
            name: "Javascript Algorithms and Data Structure",
            image: JavaScript_Certificate,
            link: "https://www.freecodecamp.org/settings#cert-javascript-algorithms-and-data-structures",
        },
    ];

    const { ref: myRef1, inView: freecodecampShow } = useInView({
        triggerOnce: true,
    });

    return (
        <section
            ref={myRef1}
            className="container flex justify-start p-5 gap-y-0 flex-wrap"
        >
            {freecodecampShow && (
                <div className="container  flex justify-start p-5 gap-y-0 flex-wrap">
                    {freecodecampCert.map((cert, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.5,
                                ease: "easeInOut",
                            }}
                            className="lg:w-1/5 md:w-2/4 xxs:w-full"
                            key={index}
                        >
                            <CertContainer
                                name={cert.name}
                                image={cert.image}
                                link={cert.link}
                            />
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default FreeCodeCamp;
