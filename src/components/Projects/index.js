import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJava, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
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
                        strArray={['P', 'r', 'o','j','e','c','t','s']}
                        idx = {8}
                    />
                </h1>
                <h2>
                    Introduction to Robotics
                </h2>
                <h3>Laboratory Work</h3>
                <p>
                    Introduction to Robotics laboratory homework, taken in the 3rd year at the Faculty of Mathematics and Computer Science, University of Bucharest. Each homework includes requirements, implementation details, code, image and video files.
                </p>
                <a className="github-link" target="_blank" rel="noreferrer" href="https://github.com/IoanaLivia/IntroductionToRobotics">Github Repo</a>
                <br></br>
                <br></br>
                <h3>Arduino Led Matrix</h3>
                 <p>
                    Snake : Snacks & Bombs is a variation of the classic snake game with the addition of bombs and various difficulty levels. 
                </p>
                <a className="github-link" target="_blank" rel="noreferrer" href="https://github.com/IoanaLivia/Robotics-Matrix-Project-Snake-Snack">Github Repo</a>
                <br></br>
                <br></br>
                <h2>
                    Clinic Management System
                </h2>
                <p>
                    Project developed for the Advanced Object Oriented Programming in Java Course in the second year at the University of Bucharest.
                </p>
                <a className="github-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ioanaliviapopescu">Github Repo</a>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Projects