import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJava, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        animateSth()
    }, [])

        const animateSth = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }


    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E', 'x', 'p','e','r','i','e','n', 'c', 'e']}
                        idx = {10}
                    />
                </h1>
                <p>
                    Support Engineer Intern
                </p>
                <p>
                    Instructor in Information Technology
                </p>
            </div>
        </div>
    )
}

export default Experience