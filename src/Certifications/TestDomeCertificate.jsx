import PropTypes from 'prop-types';
import { useEffect } from 'react';

function TestDomeCertificate({name, link, color}) {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://www.testdome.com/content/source/stylesheets/embed.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.getElementsByTagName("head")[0].appendChild(link);
    }, []);

    return (
        <div className='w-full'>
            <a href={link} className={`testdome-certificate-stamp ${color}`}>
            <span className="testdome-certificate-name">Jilbert S. Vasquez</span>
            <span className="testdome-certificate-test-name">{name}</span>
            <span className="testdome-certificate-card-logo">TestDome<br />Certificate</span>
        </a>
        </div>
        
    );
}

TestDomeCertificate.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default TestDomeCertificate;