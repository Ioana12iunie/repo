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
        <div className='container education-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E', 'd', 'u','c','a','t','i','o','n']}
                        idx = {9}
                    />
                </h1>
                <h2>
                    Master of Artificial Intelligence 
                </h2>
                <h3>
                    University of Bucharest, Oct 2023 - July 2025
                </h3>
                <p>
                    Relevant Coursework: Advanced Machine Learning, Natural language processing, Computer Vision, Practical Machine Learning, Deep Learning
                </p>
                <br />
                <div>
                    <h2>
                        Bachelor of Computer Science 
                    </h2>
                    <h3>
                        University of Bucharest, Oct 2020 - July 2023
                    </h3>
                    <p>
                        My Bachelor Thesis consisted in an Android mobile app developed with Kotlin which aims to provide a practical
                        approach to the development of emotional intelligence through its emotion recognition functionality.
                    </p>
                    <p>
                        The implementation of the NLP task is based on multiple approaches, ranging from simpler models such as
                        ComplementNB (maximum accuracy of 82%) to state of the art transformer-based models such as the ones from the
                        BERT family (maximum accuracy of 94%).
                    </p>
                    <p>Thesis Grade: 9.5 / 10</p>
                    <p>
                        Relevant Coursework:  Algorithms and Data Structures, Object Oriented Programming, Introduction to Robotics, Web
development, Artificial Intelligence
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education