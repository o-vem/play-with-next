import Link from 'next/link'

const About = (props) => {
    console.dir('Frontend About getInitialProps')

    return (
        <>
            <p> This is about page!</p>
            <Link href="/">
                <a>About Page</a>
            </Link>
        </>
    )
}

export default About 
