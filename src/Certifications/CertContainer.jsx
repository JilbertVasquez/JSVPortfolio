
function CertContainer ({name, image, link}) {

    return (
        <div className="h-72 px-5 p-2 lg:w-full md:w-2/4 xxs:w-full lg:h-72 xxs:h-60 ">
            <a href={link}>
                <img className='container h-4/5 object-contain hover:scale-105' src={image} alt={name} />
                <h1 className='text-white xxs:text-sm'>{name}</h1>
            </a>
        </div>
    )
}

export default CertContainer