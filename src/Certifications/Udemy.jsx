
import CertContainer from './CertContainer.jsx';

import Python_3_Ultimate_Guide from '/certs/Udemy/Python_3_Ultimate_Guide.jpg';
import JavaScript_Fundamentals_A_Course_for_Absolute_Beginners from '/certs/Udemy/JavaScript_Fundamentals_A_Course_for_Absolute_Beginners.jpg';
import Python_Demonstrations_For_Practice_Course from '/certs/Udemy/Python_Demonstrations_For_Practice_Course.jpg';
import HTML5_From_Basics_to_Advanced_level from '/certs/Udemy/HTML5_From_Basics_to_Advanced_level.jpg';
import CSS_Basics_to_Adv_for_front_end_development from '/certs/Udemy/CSS_Basics_to_Adv_for_front_end_development.jpg';
import JavaScript_for_Beginners_The_Complete_introduction_to_JS from '/certs/Udemy/JavaScript_for_Beginners_The_Complete_introduction_to_JS.jpg';
import Python_PCEP_Certified_Entry_Level_Python_Programmer from '/certs/Udemy/Python_PCEP_Certified_Entry_Level_Python_Programmer.jpg';
import Python_And_Django_Framework_And_HTML5_Stack_Complete_Course from '/certs/Udemy/Python_And_Django_Framework_And_HTML5_Stack_Complete_Course.jpg';
import SQL_for_Developers_Data_Analysts_and_BI_MySQL_for_everyone from '/certs/Udemy/SQL_for_Developers_Data_Analysts_and_BI_MySQL_for_everyone.jpg';
import Master_Course_in_Cloud_Computing_and_Cloud_Architecture_2v0 from '/certs/Udemy/Master_Course_in_Cloud_Computing_and_Cloud_Architecture_2v0.jpg';
import Machine_Learning_Fundamental_of_Python_Machine_Learning from '/certs/Udemy/Machine_Learning_Fundamental_of_Python_Machine_Learning.jpg';
import Web_Development_Masterclass_Online_Certification_Course from '/certs/Udemy/Web_Development_Masterclass_Online_Certification_Course.jpg';

import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Udemy () {
    const udemyCert = [
        {
            name: "Python 3 Ultimate Guide",
            image: Python_3_Ultimate_Guide,
            link: "https://www.udemy.com/certificate/UC-57b83ce9-2a02-4756-96a6-223eda5fc3da/",
        }, 
        {
            name: "JavaScript Fundamentals: A Course for Absolute Beginners",
            image: JavaScript_Fundamentals_A_Course_for_Absolute_Beginners,
            link: "https://www.udemy.com/certificate/UC-4864eb35-da56-4c00-90c3-2164c7ef0914/",
        },
        {
            name: "Python Demonstrations For Practice Course",
            image: Python_Demonstrations_For_Practice_Course,
            link: "https://www.udemy.com/certificate/UC-735b8710-d486-46fd-96d3-6fb6a6663081/",
        }, 
        {
            name: "HTML5 - From Basics to Advanced level",
            image: HTML5_From_Basics_to_Advanced_level,
            link: "https://www.udemy.com/certificate/UC-31c0fafb-ec4e-4b60-8dc3-a611ddaa9ce7/",
        },
        {
            name: "CSS - Basics to Adv for front end development",
            image: CSS_Basics_to_Adv_for_front_end_development,
            link: "https://www.udemy.com/certificate/UC-f7d387ed-f0c1-4b75-a846-f45dadd1bea1/",
        }, 
        {
            name: "JavaScript for Beginners - The Complete introduction to JS",
            image: JavaScript_for_Beginners_The_Complete_introduction_to_JS,
            link: "https://www.udemy.com/certificate/UC-51aac054-d544-402b-8498-e54efa639acc/",
        },
        {
            name: "Python PCEP: Certified Entry-Level Python Programmer",
            image: Python_PCEP_Certified_Entry_Level_Python_Programmer,
            link: "https://www.udemy.com/certificate/UC-46b2effc-4cb2-453c-ae3c-b92e4c823bd6/",
        }, 
        {
            name: "Python And Django Framework And HTML 5 Stack Complete Course",
            image: Python_And_Django_Framework_And_HTML5_Stack_Complete_Course,
            link: "https://www.udemy.com/certificate/UC-65a15ff1-a59e-403a-bcfd-f67cf254d666/",
        },
        {
            name: "SQL for Developers, Data Analysts and BI. MySQL for everyone",
            image: SQL_for_Developers_Data_Analysts_and_BI_MySQL_for_everyone,
            link: "https://www.udemy.com/certificate/UC-5ab1a97e-3bc1-42f5-bc07-ba7371907b7e/",
        }, 
        {
            name: "Master Course in Cloud Computing and Cloud Architecture 2.0",
            image: Master_Course_in_Cloud_Computing_and_Cloud_Architecture_2v0,
            link: "https://www.udemy.com/certificate/UC-5ebbb3b2-10ed-492b-a963-27421901a4cb/",
        },
        {
            name: "Machine Learning - Fundamental of Python Machine Learning",
            image: Machine_Learning_Fundamental_of_Python_Machine_Learning,
            link: "https://www.udemy.com/certificate/UC-af7486dd-807f-4958-94c4-a21a8635d6dc/",
        }, 
        {
            name: "Web Development Masterclass - Online Certification Course",
            image: Web_Development_Masterclass_Online_Certification_Course,
            link: "hhttps://www.udemy.com/certificate/UC-90a98ce6-a4fb-4432-b739-870bd6cfa4c7/",
        }
    ]

    const {ref: myRef1, inView: showUdemy} = useInView({ triggerOnce: true });

    return (
        <section ref={myRef1} className='container '>
            {showUdemy && <div className='container  flex justify-start p-5 gap-y-0 flex-wrap'>
                {udemyCert.map((cert, index) => (
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: index * 0.5, ease: "easeInOut"}}
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

export default Udemy