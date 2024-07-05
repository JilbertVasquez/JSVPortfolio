
function CertContainer ({name, image, link}) {

    return (
        <div className="h-72 w-1/5 px-5 p-2">
            <a href={link}>
                <img className='container h-4/5 object-contain hover:scale-105' src={image} alt={name} />
                <h1 className='text-white'>{name}</h1>
            </a>
        </div>
    )
}

export default CertContainer