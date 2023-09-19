import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJava, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

const Education = () => {
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
                        strArray={['E', 'd', 'u','c','a','t','i','o','n']}
                        idx = {9}
                    />
                </h1>
                <p>
                    Master of Artificial Intelligence
                </p>
                <p>
                    Bachelor of Science in Computer Science
                </p>
                <p>
                    National College "Gheorghe Sincai"
                </p>
            </div>
        </div>
    )
}

export default Education