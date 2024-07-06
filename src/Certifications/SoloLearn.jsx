
import CertContainer from './CertContainer.jsx';

import JAVA from '/certs/SoloLearn/JAVA.png';
import SQL from '/certs/SoloLearn/SQL.png';
import Intermediate_Python from '/certs/SoloLearn/Intermediate_Python.png';
import Python_Data_Structures from '/certs/SoloLearn/Python_Data_Structures.png';

function SoloLearn () {
    const freecodecampCert = [
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

    return (
        <section className='container  flex justify-start p-5 gap-y-0 flex-wrap'>
            {freecodecampCert.map((cert, index) => (
                <CertContainer key={index} name={cert.name} image={cert.image} link={cert.link} />
            ))}
        </section>
    )
}

export default SoloLearn