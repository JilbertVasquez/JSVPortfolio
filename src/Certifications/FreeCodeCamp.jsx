
import '../custom.css';
import Responsive_Web_Design_Certificate from '/certs/FreeCodeCamp/Responsive_Web_Design_Certificate.png';
import JavaScript_Certificate from '/certs/FreeCodeCamp/JavaScript_Certificate.png';

import CertContainer from './CertContainer.jsx';

function FreeCodeCamp() {
    const freecodecampCert = [
        {
            name: "Responsive Web Design",
            image: Responsive_Web_Design_Certificate,
            link: "https://www.google.com",
        }, 
        {
            name: "Javascript Algorithms and Data Structure",
            image: JavaScript_Certificate,
            link: "https://www.google.com",
        }
    ]

    return (
        <section className='container flex justify-start p-5 gap-y-0 flex-wrap'>
            {freecodecampCert.map((cert, index) => (
                <CertContainer key={index} name={cert.name} image={cert.image} link={cert.link} />
            ))}
        </section>
    )
}

export default FreeCodeCamp

