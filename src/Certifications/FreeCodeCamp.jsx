
import '../custom.css';
import Responsive_Web_Design_Certificate from '../../public/certs/Responsive_Web_Design_Certificate.png';
function FreeCodeCamp() {
    
    return (
        <section className='container bg-gray-950 cert-height flex justify-start p-5'>
            <div className="h-1/4">
                <img className='container h-full object-contain' src={Responsive_Web_Design_Certificate} alt="Responsive_Web_Design_Certificate" />
            </div>
        </section>
    )
}

export default FreeCodeCamp