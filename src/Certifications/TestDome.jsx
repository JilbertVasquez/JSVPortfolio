

import TestDomeCertificate from './TestDomeCertificate.jsx';

function TestDome() {

    const testdomecert = [
        {
            name: "Python",
            link: 'www.testdome.com/certificates/31afe0cee0ce498483df77e7cf55f923',
            color: 'gold',
        },
        {
            name: "Python Algorithms",
            link: "https://www.testdome.com/certificates/debccf6f4c944be88528a4d4c53ee849",
            color: "gold",
        },
        {
            name: "Project Management",
            link: "https://www.testdome.com/certificates/b6050cbfff64468fa1c561fe7ec871ec",
            color: "gold",
        },
        {
            name: "Engineering Math",
            link: "https://www.testdome.com/certificates/ba1ae15738b8457da243620854295d28",
            color: "gold",
        },
        {
            name: "Abstract Reasoning",
            link: "https://www.testdome.com/certificates/89f0cf42f0ff4335a9fb465490f0237a",
            color: "silver",
        },
        {
            name: "Attention to Detail",
            link: "https://www.testdome.com/certificates/c3a2729350344a37a2646362f0f1c200",
            color: "silver",
        },
        {
            name: "Attention to Detail And Time Management",
            link: "https://www.testdome.com/certificates/d1f22ec4f8884b99b479b1f489973c8e",
            color: "silver",
        },
        {
            name: "English Comprehension",
            link: "https://www.testdome.com/certificates/e22211479c97409eb7e756c42d7c8c76",
            color: "silver",
        },
        {
            name: "HTML/CSS",
            link: "https://www.testdome.com/certificates/22cc36b070264e54b3d58aa4b1f7991b",
            color: "silver",
        },
        {
            name: "Logical Reasoning",
            link: "https://www.testdome.com/certificates/37e4256e99684f4b8eb8d6f38cdc97ac",
            color: "silver",
        },
        {
            name: "Numerical Reasoning",
            link: "https://www.testdome.com/certificates/84a7e572a4ee47df9b8df1874ecfcc9f",
            color: "silver",
        },
        {
            name: "Project Management and Time Management",
            link: "https://www.testdome.com/certificates/2d49e4ab6d6347a8861b2765520927fe",
            color: "silver",
        },
        {
            name: "Time Management",
            link: "https://www.testdome.com/certificates/4f3a057585ea4825b1afb0aae87680cd",
            color: "silver",
        }
        
    ]

    return (
        <section className='container  flex justify-start p-5 gap-y-10 gap-x-5 flex-wrap scale-110'>
            {testdomecert.map((cert, index) => (
                < TestDomeCertificate key={index} name={cert.name} link={cert.link} color={cert.color} />
            ))}
            
        </section>
    )
}

export default TestDome

