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
                <h2>
                    Support Engineer Intern
                </h2>
                <h3>
                    Microsoft, Feb 2023 - Aug 2023
                </h3>
                <p>
                    As a member of the Data Integration team, my responsibilities involved delivering customer experience and success alongside troubleshooting, designing software changes and quick-fixes regarding Azure Data technologies.
                </p>
                <p>
                    I am part of the winning team of Microsoft's Learning and Innovation EMEA Intern Hackathon 2023.
                </p>
                <p>
                    I participated in the Microsoft Intern Coding Jam during which I collaborated with five other interns from different parts of the world in order to build a wellness Android app that seeks to help students better manage their goals.
                </p>
                <br />
                <div>
                    <h2>
                        Information Technology Instructor
                    </h2>
                    <h3>
                        Logiscool, Feb 2022 - Feb 2023
                    </h3>
                    <p>
                        I taught children ages 9-18 the fundamental concepts of programming in Python, JavaScript, Unity and visual programming. I am passionate about teaching and I learned to understand their needs, communicate effectively, manage conflict and be organized, which is critical to achieving the teaching objectives.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience