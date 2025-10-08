
import CertContainer from './CertContainer.jsx';

import JAVA from '/certs/SoloLearn/JAVA.png';
import SQL from '/certs/SoloLearn/SQL.png';
import Intermediate_Python from '/certs/SoloLearn/Intermediate_Python.png';
import Python_Data_Structures from '/certs/SoloLearn/Python_Data_Structures.png';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function SoloLearn() {
    const sololearnCert = [
        {
            name: "JAVA",
            image: JAVA,
            link: "https://www.sololearn.com/certificates/CT-OQ5ZOGSI",
        },
        {
            name: "SQL",
            image: SQL,
            link: "https://www.sololearn.com/certificates/CT-XEEP9I41",
        },
        {
            name: "Intermediate Python",
            image: Intermediate_Python,
            link: "https://www.sololearn.com/certificates/CT-VKPAJQG1",
        },
        {
            name: "Python Data Structures",
            image: Python_Data_Structures,
            link: "https://www.sololearn.com/certificates/CT-TDHWNL1N",
        }
    ]

    const { ref: myRef1, inView: sololearnShow } = useInView({ triggerOnce: true });

    return (
        <section ref={myRef1} className='container'>
            {sololearnShow && <div className='container  flex justify-start p-5 gap-y-0 flex-wrap'>
                {sololearnCert.map((cert, index) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.5, ease: "easeInOut" }}
                        className="lg:w-1/5 md:w-2/4 xxs:w-full"
                        key={index}
                    >
                        <CertContainer name={cert.name} image={cert.image} link={cert.link} />
                    </motion.div>
                ))}
            </div>}
        </section>
    )
}

export default SoloLearn