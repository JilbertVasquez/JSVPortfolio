
import CertContainer from './CertContainer.jsx';

import JAVA from '../../public/certs/SoloLearn/JAVA.png';
import SQL from '../../public/certs/SoloLearn/SQL.png';
import Intermediate_Python from '../../public/certs/SoloLearn/Intermediate_Python.png';
import Python_Data_Structures from '../../public/certs/SoloLearn/Python_Data_Structures.png';

function SoloLearn () {
    const freecodecampCert = [
        {
            name: "JAVA",
            image: JAVA,
            link: "https://www.google.com",
        }, 
        {
            name: "SQL",
            image: SQL,
            link: "https://www.google.com",
        },
        {
            name: "Intermediate Python",
            image: Intermediate_Python,
            link: "https://www.google.com",
        }, 
        {
            name: "Python Data Structures",
            image: Python_Data_Structures,
            link: "https://www.google.com",
        }
    ]

    return (
        <section className='container  flex justify-start p-5 gap-y-10 flex-wrap'>
            {freecodecampCert.map((cert, index) => (
                <CertContainer key={index} name={cert.name} image={cert.image} link={cert.link} />
            ))}
        </section>
    )
}

export default SoloLearn