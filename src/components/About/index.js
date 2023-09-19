import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJava, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {
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
                        strArray={['A', 'b','o','u','t', ' ', 'm', 'e']}
                        idx = {15}
                    />
                </h1>
                <p>
                    I'm an ambitious Artificial Intelligence Master's Student currently looking
                    for a Summer 2024 Software Engineering Internship that will enable me to continue to grow while working 
                    with the latest technologies on challenging and diverse projects.
                </p>
                <h2>Hobbies & Volunteering</h2>
                <p>
                    I enthusiastically engage in volunteer opportunities that allow me to channel my creativity and contribute to various projects.
                </p>
                <p>
                   In September 2023, I volunteered at the Grigore Moisil National Computer Science Competition for Adolescents. My responsibilities included designing diplomas and providing support in organizational aspects.
                </p>
                <p>
                    During my Bachelor's degree at the University of Bucharest, I served as a Design & PR Volunteer for the Association of Students at Mathematics and Informatics.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython}/>
                    </div>
                     <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5}/>
                    </div>
                     <div className='face3'>
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                     <div className='face4'>
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>
                     <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt}/>
                    </div>
                     <div className='face6'>
                        <FontAwesomeIcon icon={faCss3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About